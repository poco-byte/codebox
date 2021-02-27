import React, { useEffect, useRef } from 'react'
import styles from './home.scss'
import {HOME} from '../../data.json';

const TITLE = HOME.title;

export default function Home() {
    const titleRef = useRef();
    const subtitleRef = useRef();

    useEffect(() => {
        doAnimation();
    }, [])


    function doAnimation() {

        const titleContainer = titleRef.current
        let iniPos = 0;
        
        function animate() {
            if(iniPos < TITLE.length) {
                const character = document.createElement('span')
                character.innerHTML = TITLE[iniPos]
                character.classList.add(styles['animate'])
                titleContainer.appendChild(character)
                setTimeout(() => {
                    iniPos++;
                    animate();
                }, 70)
            } else {
                const subtitleContainer = subtitleRef.current;
                subtitleContainer.classList.add(styles['slide'])
            }
        }

        animate();

    }
    return (
        <div className={styles['container']}>
            <div className={styles['box']}>
                <div className={styles['title']} ref={titleRef} style={{width: '653px'}}>
                </div>
                <div className={styles['dash']}></div>
                <div className={styles['subtitle']} ref={subtitleRef}>
                    {HOME.subtitle}
                </div>
            </div>
        </div>
    )
}
