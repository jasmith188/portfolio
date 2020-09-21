import React from 'react';
import '../index.css';
import Image from '../images/html.png'
import Image2 from '../images/css.png'
import Image3 from '../images/js.png'
import Image4 from '../images/react.png'
import Image5 from '../images/node.png'
import Image6 from '../images/mongo.png'

function Skills() {
  return (
    <div className='skills-container-whole'>
      <div className="inner">
        <div className="header">
          <h1>My Skills</h1>
        </div>
        <div className="skills-container">
          <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image} alt="html" className='skill-icon'/>
              </div>
              <h3>HTML 5</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image2} alt="css" className='skill-icon' />
              </div>
              <h3>CSS 3</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image3} alt="java" className='skill-icon' />
              </div>
              <h3>JavaScript</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image4} alt="react" className='skill-icon' />
              </div>
              <h3>React</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image5} alt="node" className='skill-icon' />
              </div>
              <h3>Node.js</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
                  </div>
                  <div className="skill-box">
            <div className="skill-title">
              <div class="img">
                <img src={Image6} alt="Mongo" className='skill-icon' />
              </div>
              <h3>MongoDB</h3>
            </div>
            <p>
              Lorem ikslkjsdfj dfjl dfl kjh dfkjl dfjd lkfj djjejsjnabsodie
              ehwiaoqamkwbs jdh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
