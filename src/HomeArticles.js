import React from 'react'
import img1 from './images/BlackHole.PNG';
import img2 from './images/OrbitalMechanics.PNG';
import img3 from './images/MercuryVortex.PNG';
import img4 from './images/QuantumEntanglement.PNG';
const HomeArticles = () => {
    const sections = [
        {
            id: 1,
            imageUrl: img1,
            text: 'Black Holes: Where Time stands still and Space bends',
            link: 'https://example.com/1',
        },
        {
            id: 2,
            imageUrl: img2,
            text: 'Differentiation Equations in Orbital Mechanics',
            link: 'https://example.com/2',
        },
        {
            id: 3,
            imageUrl: img3,
            text: 'The Myth and Mystery of the Mercury Vortex Engine',
            link: 'https://example.com/3',
        },
        {
            id: 4,
            imageUrl: img4,
            text: 'Quantum Entanglement: Particles with psychic powers?',
            link: 'https://example.com/4',
        }
        ];
            const uniqueSections = (sectionsArray) => {
            const uniqueSet = new Set();
        return sectionsArray.filter(section => {
            if (!uniqueSet.has(section.id)) {
            uniqueSet.add(section.id);
            return true;
            }
            return false;
        });
        };
        return (
        <div className="page-container">
            {uniqueSections(sections).map((section) => (
            <div className="section" key={section.id}>
                <div className="left-div">
                <img src={section.imageUrl} alt={`Section ${section.id}`} className="image" />
                </div>
                <div className="right-div">
                <div className="text-container">
                    <p>
                    {section.text}
                    <br/>
                    <a href={section.link} target="_blank" rel="noreferrer" >
                        Learn More
                    </a>
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
        );
    };
    

export default HomeArticles
