import React from 'react';
import './KeepCalm.css';
import guyInWheelChairImg from '../../../Images/laptop-smatphone-mockup.jpg';

export default function KeepCalm() {
  return (
    <div className="KeepCalm">
      <div className="KeepCalm__Title">
        <h2>
          Keep Calm
          <br />
          &
          <br />
          stay t
          <span className="KeepCalm__text--underline">uned</span>
!
        </h2>
      </div>
      <div className="KeepCalm__Container__Flex">
        <img className="KeepCalm__Photo" src={guyInWheelChairImg} alt="wheelchair vs stairs" />
        <div className="KeepCalm__Description">
          <p className="KeepCalm__Description__text">
            We provide you with the last updates about your search, in real time. We use data from twitter
            and TfL. If something is not working, someone will let you know. If you discover a lift
            is not working, please be the first to let us know!
          </p>
        </div>
      </div>
    </div>
  );
}
