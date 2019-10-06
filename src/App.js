import React from 'react';
import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer';

const customers = 
[
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '의적'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김탱자',
    'birthday': '950814',
    'gender': '남자',
    'job': '취준생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '일라',
    'birthday': '940713',
    'gender': '여자',
    'job': '대학원생'
  }
]

class App extends React.Component{
  render(){
    return(
      <div>
        {
          customers.map(c =>{
            return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
