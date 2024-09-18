import React,{useState,useEffect,useRef}  from 'react'
import {data} from './Data'
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import './App.css'
const PagesNav = () => {
        const [showDropdown, setShowDropdown] = useState(false);
        const[click,setClick]= useState(false);
        const[dropdown,setDropdown] = useState(false)
        const handleClick = () => setClick(!click);
        const closeMobileMenu =() => setClick(false);
    
        const onMouseEnter = () => {
            if(window.innerWidth<960){
                setDropdown(false)
            }else{
                setDropdown(true)
            }
        }; 
        const onMouseLeave = () => {
            if(window.innerWidth<960){
                setDropdown(false)
            }else{
                setDropdown(false)
            }
        }; 
        const [searchTerm, setSearchTerm] = useState(""); // User input for search
        const [suggestions, setSuggestions] = useState([]); // Holds the suggestions
        const [showSuggestions, setShowSuggestions] = useState(false); // Controls the dropdown visibility
        const searchBoxRef = useRef(null); // Ref for the search box and dropdown
        useEffect(() => {
        if (searchTerm) {
          // Filter suggestions based on the search term
            const results = data.filter(item =>
            item.segments.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.articles.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.categories.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.toLowerCase().includes(searchTerm.toLowerCase()))
            
            setSuggestions(results);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
        }, [searchTerm]);
    
      // Handle user clicking on a suggestion
        const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.articles); // Set the clicked suggestion to the search bar
        setShowSuggestions(false); // Hide the suggestions box
        };
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setShowSuggestions(false); // Hide suggestions if clicked outside
                }
            };
        
            document.addEventListener("click", handleClickOutside); // Listen for outside clicks
            return () => {
              document.removeEventListener("click", handleClickOutside); // Cleanup listener on unmount
            };
            }, []);
    
        return (
            <>
        <nav>
            
            {/* <h3 className="slogan">From Atoms to Space</h3> */} 
            <div className="navbar">
            <div className="search-icon">
            <input className="search-box" ref={searchBoxRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
            onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
            />
            <span class="icon">🔍</span>
            {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
                {suggestions.map((suggestion) => (
                <li
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                >
                    <strong>{suggestion.articles}</strong> - {suggestion.categories}
                </li>
                ))}
            </ul>
            )}
            </div>
            <div className="NAVBAR">
    
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='about-nav-item' onMouseEnter={()=> setShowDropdown(true)}
                onMouseLeave={()=> setShowDropdown(false)}> Case Studies <i className='fa fa-caret-down' />
                {/* {showDropdown && (
                <ul className="about-dropdown-menu">
                    <li>
                    <a href="https://www.instagram.com/anu_brahman/" target="_blank" rel="noreferrer">
                        Instagram
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/company/anubrahman/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    </li>
                </ul>
                )} */}
                </li>
                {/* <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Segments <i className='fa fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
                
                </li> */}
                <li className='nav-item'>
                <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Current Affairs
                </Link>
                </li>
                
            </ul>
            </div>
            </div>
            </nav>
            </>
    )
}

export default PagesNav
