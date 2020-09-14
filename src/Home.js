import React from 'react'
import Banner from './Banner';
import Card from './Card';
import Button from '@material-ui/core/Button';
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Entire home"
          description="we will will rock oyu you mommy has a old man from round tha way."

        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Entire home"
          description="we will will rock oyu you mommy has a old man from round tha way."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire home"
          description="we will will rock oyu you mommy has a old man from round tha way."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://source.unsplash.com/_TPTXZd9mOo/720x470"
          description="we will will rock oyu you mommy has a old man from round tha way."
          price="$49.99"

        />
        <Card
          src="https://source.unsplash.com/qCjolcMFaLI/720x470"
          description="we will will rock oyu you mommy has a old man from round tha way."
          price="$49.99"
        />
        <Card
          src="https://source.unsplash.com/OgcJIKRnRC8/720x470"
          description="we will will rock oyu you mommy has a old man from round tha way."
          price="$49.99"
        />
      </div>


      <div className="home__section2">

        <div className="box__container">
          <div className="box__content">
            <h1>Broadway Online Experiences</h1>
            <p>Join live, interactive performances and conversations.</p>
          </div>
          <div className="button__content">
            <Button variant="outlined">
              Explore
           </Button>
          </div>
        </div>
        <div className="card__section">
          <div className="img__section">
            <Card
              src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=720"
              title="we will will rock oyu you mommy has a old man from round tha way."
            />
          </div>
          <div className="img__gallery">
            <Card
              classname="img__one"
              src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=720"
              title="Enjoy a night of entertainment."
            />
            <Card
              classname="img__two"
              src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=720"
              title="Mind blowing magic are waiting."

            />
            <div className="last__card">
              <Card
                classname="img__three"
                src="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=720"
                title="a fun beautiful night of singing and dancing."


              />
            </div>

          </div>



        </div>
      </div>
      {/*end sec */}
    </div>
  )
}

export default Home
