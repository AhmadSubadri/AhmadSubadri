import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const BlogPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-[#0A2540]">Blog</h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Read my latest thoughts on technology and development.
        </p>
        {/* Add blog posts here */}
      </div>
    </AnimatedPage>
  );
};

export default BlogPage;
