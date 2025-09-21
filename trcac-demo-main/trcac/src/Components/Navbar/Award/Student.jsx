import React, { useState, useEffect } from 'react';
import { Award, Trophy, Star, Medal, Users, BookOpen, Calendar, MapPin } from 'lucide-react';

// Mock data for demonstration - no changes needed here, as it's just a JS object
const mockAwardsData = {
  dc: [
    {
      id: 'dc-1',
      awardee: 'Priya Sharma',
      awardTitle: 'Best Research Paper Award',
      event: 'National Science Conference 2024',
      authority: 'Indian Science Congress Association',
      date: 'March 15, 2024',
      location: 'Mumbai, Maharashtra',
      category: 'Research',
      level: 'Gold',
      description: 'Outstanding research in environmental sustainability and renewable energy solutions.'
    },
    {
      id: 'dc-2',
      awardee: 'Rajesh Kumar',
      awardTitle: 'Excellence in Mathematics',
      event: 'Inter-University Mathematics Olympiad',
      authority: 'Association of Indian Universities',
      date: 'February 28, 2024',
      location: 'Delhi',
      category: 'Academic',
      level: 'Silver',
      description: 'Exceptional performance in advanced mathematical problem solving.'
    },
    {
      id: 'dc-3',
      awardee: 'Sneha Patel',
      awardTitle: 'Innovation Award',
      event: 'Tech Innovation Challenge',
      authority: 'Department of Science & Technology',
      date: 'April 10, 2024',
      location: 'Bangalore, Karnataka',
      category: 'Innovation',
      level: 'Winner',
      description: 'Developed an AI-based solution for early disease detection.'
    },
    {
      id: 'dc-4',
      awardee: 'Arjun Singh',
      awardTitle: 'Cultural Excellence Award',
      event: 'National Youth Festival',
      authority: 'Ministry of Youth Affairs & Sports',
      date: 'January 20, 2024',
      location: 'Guwahati, Assam',
      category: 'Cultural',
      level: 'Bronze',
      description: 'Outstanding performance in traditional Indian classical dance.'
    },
    {
      id: 'dc-5',
      awardee: 'Meera Reddy',
      awardTitle: 'Social Service Recognition',
      event: 'Community Impact Awards',
      authority: 'National Service Scheme',
      date: 'May 5, 2024',
      location: 'Chennai, Tamil Nadu',
      category: 'Social Service',
      level: 'Winner',
      description: 'Led initiatives for rural education and digital literacy programs.'
    },
    {
      id: 'dc-6',
      awardee: 'Vikram Joshi',
      awardTitle: 'Sports Excellence Award',
      event: 'All India University Games',
      authority: 'Association of Indian Universities',
      date: 'March 30, 2024',
      location: 'Pune, Maharashtra',
      category: 'Sports',
      level: 'Gold',
      description: 'National champion in badminton and represented India internationally.'
    }
  ],
  jc: [
    {
      id: 'jc-1',
      awardee: 'Ananya Gupta',
      awardTitle: 'Science Talent Search Award',
      event: 'National Talent Search Examination',
      authority: 'NCERT',
      date: 'April 15, 2024',
      location: 'New Delhi',
      category: 'Academic',
      level: 'Gold',
      description: 'Top performer in science and mathematics with national ranking.'
    },
    {
      id: 'jc-2',
      awardee: 'Rohit Verma',
      awardTitle: 'Young Innovator Award',
      event: 'Junior Science Congress',
      authority: 'Indian Science Congress',
      date: 'February 12, 2024',
      location: 'Kolkata, West Bengal',
      category: 'Innovation',
      level: 'Silver',
      description: 'Innovative project on water purification using natural materials.'
    },
    {
      id: 'jc-3',
      awardee: 'Kavya Nair',
      awardTitle: 'Literary Excellence Award',
      event: 'National Essay Competition',
      authority: 'Central Board of Secondary Education',
      date: 'March 25, 2024',
      location: 'Kochi, Kerala',
      category: 'Literature',
      level: 'Winner',
      description: 'Exceptional essay on climate change and environmental conservation.'
    },
    {
      id: 'jc-4',
      awardee: 'Aadit Agarwal',
      awardTitle: 'Mathematics Olympiad Medal',
      event: 'Regional Mathematics Olympiad',
      authority: 'Homi Bhabha Centre for Science Education',
      date: 'January 18, 2024',
      location: 'Hyderabad, Telangana',
      category: 'Academic',
      level: 'Bronze',
      description: 'Outstanding performance in advanced mathematical problem solving.'
    },
    {
      id: 'jc-5',
      awardee: 'Ishita Das',
      awardTitle: 'Environmental Champion',
      event: 'Green India Challenge',
      authority: 'Ministry of Environment & Forests',
      date: 'June 8, 2024',
      location: 'Bhubaneswar, Odisha',
      category: 'Environmental',
      level: 'Winner',
      description: 'Led school-wide environmental conservation and tree plantation drives.'
    }
  ]
};

const Student = () => {
  // State variables - no type annotations needed in JS
  const [activeTab, setActiveTab] = useState('DC');
  const [awardsData, setAwardsData] = useState({ dc: [], jc: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Gold':
      case 'Winner':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'Silver':
      case 'Runner-up':
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 'Bronze':
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-blue-500" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Gold':
      case 'Winner':
        return 'from-yellow-400 to-amber-500';
      case 'Silver':
      case 'Runner-up':
        return 'from-gray-300 to-gray-500';
      case 'Bronze':
        return 'from-amber-500 to-orange-600';
      default:
        return 'from-blue-400 to-indigo-500';
    }
  };

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setAwardsData(mockAwardsData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch awards data:", err);
        setError("Failed to load awards data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAwards();
  }, []);

  const getFilteredAwards = (awards) => {
    return awards.filter(award => {
      const matchesSearch = searchTerm === '' ||
        award.awardee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        award.awardTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        award.event.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = filterCategory === 'All' || award.category === filterCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const getCategories = () => {
    const allAwards = [...awardsData.dc, ...awardsData.jc];
    const categories = [...new Set(allAwards.map(award => award.category))];
    return ['All', ...categories];
  };

  const renderAwards = (awards) => {
    const filteredAwards = getFilteredAwards(awards);

    if (filteredAwards.length === 0) {
      return (
        <div className="text-center py-12">
          <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-500">No awards found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or filter settings.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredAwards.map((award, index) => (
          <div
            key={award.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <div className={`h-2 bg-gradient-to-r ${getLevelColor(award.level)}`}></div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getLevelIcon(award.level)}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getLevelColor(award.level)} text-white`}>
                    {award.level}
                  </span>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                  {award.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                {award.awardTitle}
              </h3>

              <div className="flex items-center mb-3">
                <Users className="h-4 w-4 text-indigo-500 mr-2" />
                <p className="text-gray-700 font-semibold">{award.awardee}</p>
              </div>

              <div className="flex items-center mb-3">
                <BookOpen className="h-4 w-4 text-green-500 mr-2" />
                <p className="text-gray-600 text-sm">{award.event}</p>
              </div>

              <div className="flex items-center mb-3">
                <Award className="h-4 w-4 text-purple-500 mr-2" />
                <p className="text-gray-600 text-sm font-medium">{award.authority}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                  <p className="text-gray-500 text-sm">{award.date}</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-red-500 mr-2" />
                  <p className="text-gray-500 text-sm">{award.location}</p>
                </div>
              </div>

              {award.description && (
                <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-300">
                  {award.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen font-sans">
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
              Student Awards
            </h1>
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">
              at TRCAC
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Celebrating the exceptional achievements, innovations, and contributions of our outstanding students
              across various fields of excellence and leadership.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search awards, students, or events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="flex gap-4 items-center">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                {getCategories().map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 mb-12">
          <button
            onClick={() => setActiveTab('DC')}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === 'DC'
                ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-purple-600 text-white shadow-xl transform scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 shadow-md'
              }
            `}
          >
            <BookOpen className="h-5 w-5" />
            Degree College Awards
            <span className="ml-2 px-2 py-1 rounded-full bg-white bg-opacity-20 text-xs font-semibold">
              {awardsData.dc.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('JC')}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === 'JC'
                ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-purple-600 text-white shadow-xl transform scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 shadow-md'
              }
            `}
          >
            <Users className="h-5 w-5" />
            Junior College Awards
            <span className="ml-2 px-2 py-1 rounded-full bg-white bg-opacity-20 text-xs font-semibold">
              {awardsData.jc.length}
            </span>
          </button>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          {loading && (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 font-medium">Loading awards data...</p>
              <p className="text-gray-400 mt-2">Discovering excellence and achievements</p>
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-300 rounded-xl p-6 max-w-md mx-auto">
                <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <p className="text-xl text-red-700 font-semibold mb-2">Oops! Something went wrong</p>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="transition-all duration-700 ease-in-out">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {activeTab === 'DC' ? 'Degree College' : 'Junior College'} Student Awards
                </h2>
                <p className="text-gray-600">
                  {getFilteredAwards(activeTab === 'DC' ? awardsData.dc : awardsData.jc).length} awards found
                </p>
              </div>
              {activeTab === 'DC' && renderAwards(awardsData.dc)}
              {activeTab === 'JC' && renderAwards(awardsData.jc)}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Student;