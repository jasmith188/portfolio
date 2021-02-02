// import React from 'react';
// import Typical from 'react-typical';
// import Image1 from '../images/profile.jpeg';
// import Image2 from '../images/cooking2.jpg';
// import Image3 from '../images/cooking.jpeg';

// import '../App.css';

// const About = ({ name, paragraph, paragraph2, landingPageImage }) => {
//   return (
//     <div id="about" className="about">
//       <div className="row">
//         {/* <div className="jumbotron text-center hoverable p-4"> */}

//         <div className="col-md-4 ">
//           <h1 className="about-intro">Hi, I'm {name}.</h1>
//           <p className='typical-font'>
//             I
//             <Typical
//               loop={Infinity}
//               wrapper="b"
//               steps={[
//                 ' am a developer 💻',
//                 900,
//                 "'m a former chef  👨‍🍳",
//                 900,
//                 ' live in Florida 🍊 😎 🌴',
//                 900,
//                 "'m a problem solver 🤓",
//                 900,
//                 // ' love the outdoors 🤿  🚴🏻‍♂️  🎣  🏊‍♂️  🏀  🏈',
//                 // 900,
//               ]}
//             />
//           </p>
//           {/* <Button href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d587a8fe-9f08-489c-be03-fcaf8579377d'>Resume</Button> */}

//           <hr />
//           <p className="about-paragraph">{paragraph}</p>

//           {''}
//         </div>

//         <div className="col-md-6  ">
//           <img
//             className="profile-img"
//             src={Image1}
//             height="380px"
//             width="auto"
//             alt={'error'}
//           />
//           <div className="mask rgba-white-slight"></div>
//         </div>
//       </div>
//       <br />
//       <div className="row">
//         <div className="col-sm-4  ml-1 mt-2">
//         <p className="cooking-paragraph">{paragraph2}</p>

//         </div>
//         <div className="col-md-2 offset-md-1 mx-3 my-3">
//           <img
//             className="cooking-img"
//             align="center"
//             src={Image3}
//             height="480px"
//             width="auto"
//             alt={'error'}
//           />
//         </div>
//         <div className="col-sm-4  ml-1 mt-2">
//         <div className="view overlay">
//             <img
//               className="cooking-img"
//               // align="flex"
//               src={Image2}
//               height="480px"
//               width="auto"
//               alt={'error'}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import './About.scss';
import GetAppIcon from '@material-ui/icons/GetApp';

const About = ({ paragraph, paragraph2 }) => {
  return (
    <div className="about" id="about">
      <div className="about__divider"></div>
      <div className="container">
        <div className="container__left">
          <div className="image">
            <div className="image__photo" alt=""></div>
            <div className="image__background"></div>
          </div>
        </div>
        <div className="container__right">
          <div className="information">
            <h1 className="information__section">ABOUT</h1>
            <p className="information__description">{paragraph}</p>
            <p className="information__description information__description--last">
              {paragraph2}
            </p>
            <a
              href="https://docs.google.com/document/d/1d925nouzISSkhkrQ2MGmC7fi4cnUpGM1i0oyX7eAqmM/edit?usp=sharing"
              download
            >
              <button className="information__CV">
                <GetAppIcon />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;