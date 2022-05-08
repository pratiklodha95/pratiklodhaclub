import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Typewriter from "typewriter-effect";

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeekIndex = (new Date()).getDay();
var dayOfWeek = weekdays[dayOfWeekIndex];
var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
var dayOfWeekPast;
var hourOfDay = new Date().getHours();
var timeOfDay;
// choose day of week other than current one
if (dayOfWeekPastIndex == dayOfWeekIndex) {
  dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
} else {
  dayOfWeekPast = weekdays[dayOfWeekPastIndex];
}
// assign time of day to the hour
if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
  timeOfDay = "morning";
} else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
  timeOfDay = "afternoon";
} else { 
  timeOfDay = "evening";
}

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <section className="smallfont">
        <Typewriter
          options={{
            strings: [
              "Come here on a " + dayOfWeekPast + " night sometime. <br> It's actually pretty crowded.<br> But on a " + dayOfWeek + " " +  timeOfDay + " <br> I guess it's just you and me."
            ],
            autoStart: true,
            loop: true,
          }}
        />
        </section>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Take every chance you get in life, because there's undo in life !!"{" "}
          </p>
          <footer className="blockquote-footer">Pratik Lodha</footer>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
