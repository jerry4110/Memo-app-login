import React from 'react'
import Post from './Post'
import '../Feed.css'

// 피드 데이터 생성
const generateFeedData = () => {
  const users = [
    { username: 'user1', profilePic: 'man.png' },
    { username: 'user2', profilePic: 'woman.png' },
    { username: 'user3', profilePic: 'man.png' },
    { username: 'user4', profilePic: 'woman.png' },
    { username: 'user5', profilePic: 'man.png' },
    { username: 'user6', profilePic: 'woman.png' },
    { username: 'user7', profilePic: 'man.png' },
    { username: 'user8', profilePic: 'woman.png' },
    { username: 'user9', profilePic: 'man.png' },
    { username: 'user10', profilePic: 'woman.png' },
  ]

  const images = [
    'img01.png',  // 실제로는 .png 파일
    'img02.jpg',
    'img03.jpg',
    'img04.png',  // 실제로는 .png 파일
    'img05.jpg',
    'img06.jpg',
    'img07.jpg',
    'img08.jpg',
    'img09.jpg',
    'img10.jpg',
  ]

  return images.map((image, index) => ({
    id: index + 1,
    username: users[index].username,
    profilePic: users[index].profilePic,
    image: image,
    likes: Math.floor(Math.random() * 1000) + 100,
    caption: `이것은 ${users[index].username}의 게시물입니다. #인스타그램 #일상 #사진`,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ko-KR'),
  }))
}

function Feed() {
  const posts = generateFeedData()

  return (
    <div className="feed">
      <div className="feed-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed

