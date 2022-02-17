import image1 from './assets/images/suNodeku.png'
import image2 from './assets/images/teamprofile_gen.png';
import image3 from './assets/images/notetaker_pic1.png';
import image4 from './assets/images/pairup.png';
import image5 from './assets/images/goodreadme.png';
import image6 from './assets/images/scheduler.png';
import image7 from './assets/images/weatherdash.png';
import image8 from './assets/images/codingquiz.png';
import image9 from './assets/images/Screenshot (22).png';


const projects = [
  {
    title: 'SuNodeKu',
    description: 'SuNodeKu is an interactive puzzle challenge.',
    repo: 'https://github.com/bradleyjosephh/suNodeKu',
    source: 'https://sunodeku.herokuapp.com/',
    img: image1
  },
  {
    title: 'teamprofile_gen',
    description: 'An application deisgned to make a quick and easy team profile for a business with categories for employees to be designated as either manager, engineer, or intern',
    repo: 'https://github.com/bradleyjosephh/teamprofile_gen',
    source: 'https://blog-about-it-techblog.herokuapp.com',
    img: image2
  },
    {
    title: 'Notetaker',
    description: 'A note taking app using db.json to store notes created using express. This app is deployed through heroku.',
    repo: 'https://github.com/bradleyjosephh/notetaker',
    source: 'https://aqueous-bastion-88337.herokuapp.com/',
    img: image3
  },
  {
    title: 'PairUp',
    description: 'Collaborative group website that utilizes two different APIs to pair recipes and drinks based on user input.',
    repo: 'https://github.com/bradleyjosephh/pairUp',
    source: 'https://bradleyjosephh.github.io/pairUp/',
    img: image4
  },
  {
    title: 'Good README Generator',
    description: 'A quick and simple readme generator using inquirer.',
    repo: 'https://github.com/bradleyjosephh/Good_README_Generator',
    source: 'https://youtu.be/QV8hq_uRVpk',
    img: image5
  },
  {
    title: 'Day Planner',
    description: 'Day planner for 8 AM to 6 PM that makes updates to the page based on the time of day and which actvity is planned next.',
    repo: 'https://github.com/bradleyjosephh/Scheduler',
    source: 'https://bradleyjosephh.github.io/Scheduler/',
    img: image6
  },
  {
    title: 'Weather Dashboard',
    description: 'Search weather forecast by location with up to date results for current and projected weather statistics.',
    repo: 'https://github.com/bradleyjosephh/Weather_Dashboard',
    source: 'https://bradleyjosephh.github.io/Weather_Dashboard/',
    img: image7
  },
  {
    title: 'Code Quiz',
    description: 'A timed quiz about javascript that stores high scores.',
    repo: 'https://github.com/bradleyjosephh/JavaQuiz',
    source: 'https://bradleyjosephh.github.io/JavaQuiz/',
    img: image8
  },
  {
    title: 'Password Generator',
    description: 'Made a password generator using javascript with selectors for characters to include: lowercase, uppercase, numbers, and special characters to the password randomizer. Also prompted the user for how many characters they want their password to be between 8-128.',
    repo: 'https://github.com/bradleyjosephh/Password_Generator',
    source: 'https://bradleyjosephh.github.io/Password_Generator/',
    img: image9
  }
]

export default projects