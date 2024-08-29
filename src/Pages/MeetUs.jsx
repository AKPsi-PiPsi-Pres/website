import React from 'react';
import BrotherList from './BrotherList';
import './MeetUs.css';

// Example data for brothers (you can replace this with your real data)
export const brothers = [
  {
    name: 'John Doe',
    major: 'Business Administration',
    graduationYear: 2024,
    linkedinUrl: 'https://www.linkedin.com/in/johndoe',
    photo: '/path-to-photo/john-doe.jpg',
    hobbies: 'Basketball, Hiking, Reading',
    interests: 'Entrepreneurship, Finance, Technology',
    askMeAbout: 'Leadership, Networking, Time Management',
    loveStatement: 'I love AKPsi because it has provided me with a supportive community where I have grown both personally and professionally.',
  },
  {
    name: 'Jane Smith',
    major: 'Marketing',
    graduationYear: 2025,
    linkedinUrl: 'https://www.linkedin.com/in/janesmith',
    photo: '/path-to-photo/jane-smith.jpg',
    hobbies: 'Photography, Traveling, Cooking',
    interests: 'Branding, Social Media, Advertising',
    askMeAbout: 'Public Speaking, Event Planning, Creative Writing',
    loveStatement: 'AKPsi has given me the tools and confidence to succeed in the business world and has connected me with amazing people.',
  },
  // Add more brothers here
];

export default function MeetUs() {
  return (
    <div className="meet-us-page pageContainer">
      <h1>Meet Our Brothers</h1>
      <BrotherList brothers={brothers} />
    </div>
  );
}
