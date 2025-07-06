# Neetcode
Going through the neetcode 150

This repo is filled with my solutions to the Neetcode 150. I am doing this to get more comfortable with data structures & algorithms as I prepare for job interviews.

## Table of Contents
- [How It's Made](#how-its-made)
- [Optimizations](#optimizations)
- [Lessons Learned](#lessons-learned)
- [Resources](#resources)
- [Contact](#contact)

## How It's Made
I solve the problems in JavaScript and sometimes Python as well.

## Optimizations
As I do each solution, I usually start with a brute force version or just the first solution I think of. After, I try to optimize it to be more efficient.

## Lessons Learned
- Contains Duplicate
    - Sometimes when solving these problems you realize how simple an answer can be. I sometimes overcomplicate a solution and think too hard about it when there is really a simpler answer. This is how I felt when I realized I could create a set out of the array of nums to get the unique values and just compare the set size to the array length to figure out if there were duplicates! I'll be remembering this for next time.
    - Data Structure Used: Hash Set
- Top K Frequent Elements
  - I first did a brute force solution and when I looked at the "hint" it said my solution was "naive" 😭. The most solution they had was a bucket sort. Tomorrow I am going to work on learning bucket sort and min-heap since these are new for me!
  - This was my first exposure to using the bucket sort algorithm
- In doing many of these problems, I started brute forcing it but ultimately looked at the solution and saw one very different from my own. Then, I went through the code line by line and the video to figure out how they solved the problem. Then, I solved it with them and tried to solve it on my own. I think the best way to do this is to come back to the same problems a few days later and try to solve them without looking at the solutions. 
- 7/6/25: Did group anagrams again in Python. Definitely need to practice this one again, because I had to look at the answer almost immediately. It didn't automatically come to my mind to create an array with a length of 26 or do it the more efficient way at all. I naturally wanted to sort each string first and make a hashmap that way.

## Resources
- [JavaScript DS & A](https://github.com/trekhleb/javascript-algorithms)

## Contact
<p align="center">
  <a href="https://rai-dorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/rai-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge" alt="LinkedIn">
  </a>
  <a href="https://bsky.app/profile/rai-bread.bsky.social" target="blank">
    <img src="https://img.shields.io/badge/Bluesky-563d7c?&style=for-the-badge" alt="@rai-bread on Bluesky" />
  </a> 
  <a href="https://raisadorzback.hashnode.dev/">
    <img src="https://img.shields.io/badge/Blog-046E6D?&style=for-the-badge" alt="Blog">
  </a>
</p>