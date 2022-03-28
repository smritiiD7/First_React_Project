import React from "react";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>
          Using React Facebook engineers made React Native library for hybrid
          application development.
        </li>
        <li>React is javaScript library.</li>
        <li>
          Among Angular, Vuejs and Nodejs, React has high SEO(search engine
          optimization).
        </li>
        <li>
          React takes DOM to the next level by keeping in memory a virtual
          representation of a UI and synchronizing it with the real DOM.
        </li>
        <li>
          React has 6,011,067 weekly downloads. Angular, vue and node are behind
          react. React has fully grown community and support.
        </li>
      </ul>
    </main>
  );
}
