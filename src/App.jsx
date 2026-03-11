import Card from "./components/card";


const App = () => {

  const data = [
  {
    "photo": "images/user1.jpg",
    "name": "Rahul Sharma",
    "username": "rahul_23",
    "bio": "Frontend developer and tech enthusiast.",
    "points": 1200,
    "friends": 340,
    "joinedAt": "March 2023"
  },
  {
    "photo": "images/user2.jpg",
    "name": "Priya Patel",
    "username": "priya_codes",
    "bio": "UI/UX designer who loves creativity.",
    "points": 980,
    "friends": 275,
    "joinedAt": "July 2022"
  },
  {
    "photo": "images/user3.jpg",
    "name": "Amit Verma",
    "username": "amit_dev",
    "bio": "JavaScript and Node.js developer.",
    "points": 1500,
    "friends": 410,
    "joinedAt": "January 2024"
  },
  {
    "photo": "images/user4.jpg",
    "name": "Sneha Joshi",
    "username": "sneha_art",
    "bio": "Digital artist and creative thinker.",
    "points": 760,
    "friends": 190,
    "joinedAt": "November 2023"
  },
  {
    "photo": "images/user5.jpg",
    "name": "Karan Mehta",
    "username": "karan_tech",
    "bio": "Full stack developer and problem solver.",
    "points": 1320,
    "friends": 365,
    "joinedAt": "May 2022"
  },
  {
    "photo": "images/user6.jpg",
    "name": "Neha Shah",
    "username": "neha_shah",
    "bio": "Photographer capturing beautiful moments.",
    "points": 840,
    "friends": 220,
    "joinedAt": "August 2023"
  },
  {
    "photo": "images/user7.jpg",
    "name": "Arjun Singh",
    "username": "arjun_play",
    "bio": "Gaming lover and streamer.",
    "points": 670,
    "friends": 150,
    "joinedAt": "February 2024"
  },
  {
    "photo": "images/user8.jpg",
    "name": "Pooja Desai",
    "username": "pooja_design",
    "bio": "Graphic designer and branding expert.",
    "points": 1110,
    "friends": 305,
    "joinedAt": "October 2022"
  },
  {
    "photo": "images/user9.jpg",
    "name": "Rohit Kumar",
    "username": "rohit_k",
    "bio": "Backend developer and database specialist.",
    "points": 1450,
    "friends": 390,
    "joinedAt": "December 2021"
  },
  {
    "photo": "images/user10.jpg",
    "name": "Ananya Gupta",
    "username": "ananya_writes",
    "bio": "Content writer and blogger.",
    "points": 920,
    "friends": 260,
    "joinedAt": "June 2023"
  }
];


  return (
    <>
      <section className="flex flex-wrap justify-center">
        {/* <Card name = {data}/> */}
      

        {data.map(function(user) {
          // console.log(user);
          return <Card data = {user} />;

          
        })}

      </section>
    </>
    
  )
};

export default App;
