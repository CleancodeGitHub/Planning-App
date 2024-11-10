import { Maximize2 } from 'lucide-react';

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
      name: 'Clara Rossie',
      content: 'Planning for new event at Vegas Club with buffet dinner on coming week.',
    },
    {
      id: 2,
      avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
      name: 'George Hamilton',
      content: 'We are planning to visit Hollywood city for have some fun...',
    },
    {
      id: 3,
      avatar: 'https://randomuser.me/api/portraits/women/91.jpg',
      name: 'Lynn Morancie',
      content: 'Hey! I am organising a school fund for help poor buying winter clothes...',
    },
    {
      id: 4,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'William Cohen',
      content: 'I am going to arrange a rock metal band party tomorrow. Let me know...',
    },
    {
      id: 5,
      avatar: 'https://randomuser.me/api/portraits/men/94.jpg',
      name: 'Michael Patt',
      content: 'I am bored to see all above plans! Lets go to moon and have some adventure',
    },
  ];

  return (
    <div className="bg-gray-50 p-4">
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg p-4 shadow-sm flex items-start space-x-4">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{post.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.content}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;