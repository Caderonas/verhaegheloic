import React from 'react';
import './portfolio.scss';

class portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio">
                <svg className="header" viewBox="0 0 1923 119" version="1.1">
                    <path d="M2 16.3866C48.0746 14.5473 94.1485 12.6966 140.182 10.6722C170.427 9.34214 200.435 7.28874 230.748 6.17506C385.433 0.492096 543.424 -1.10077 696.025 12.5657C801.009 21.9679 901.276 37.5751 1002.42 52.7016C1089.24 65.6853 1175.96 79.4165 1267.97 83.3023C1305.27 84.8777 1337.88 85.1655 1375.5 84.9254C1432.56 84.5612 1490.66 83.1116 1545.97 76.4383C1625.79 66.8092 1838.52 23.7699 1910 6.17506" />
                    <path d="M1909 109C1815.67 102.194 1638.14 82.9021 1549.28 69.1799C1444.77 53.0413 1342.3 28.3121 1234.02 17.8863C1139.62 8.79758 1049.2 6.75176 952.848 8.64405C743.669 12.7523 538.146 28.2254 331.101 40.6721C266.845 44.5349 201.916 48.3943 137.127 50.2631C120.601 50.7398 27.8496 60.6299 15 58.8659" />
                    <path d="M16 117C110.322 115.329 414.594 96.6478 505.652 85.6045C613.455 72.5306 721.832 56.9158 831.874 47.7882C898.327 42.2762 970.276 42.8026 1037.71 43.278C1406.67 45.8792 1619.86 114.419 1921 117" />
                </svg>
                <ul>
                    <li>
                        <h4><a href="https://github.com/Caderonas/lamouscronnoise" target="_blank" rel="noreferrer">La Mouscronnoise</a></h4>
                        <p>I made this website a few years ago for student group which I'm a part of for 4 years now.</p>
                        <p>Most of work is on the backend in PHP.</p>
                    </li>
                    <li>
                        <h4><a href="https://caderonas.github.io/Mouscron_Eurometropolitan_city/" target="_blank" rel="noreferrer">Eurometropolitan</a></h4>
                        <p>This page was asked by a friends who has to present his final study work as architect remotly.</p>
                        <p>I made this easy way to discover his work with map and pictures.</p>
                    </li>
                    <li>
                        <h4>And more to come...</h4>
                    </li>
                </ul>
            </div>
        );
    }
}

export default portfolio;