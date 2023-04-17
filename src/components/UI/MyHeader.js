import background from "../../assets/food_hero.png"
import HeaderButton from "./HeaderButton"
import MealsSummary from "../Meals/MealsSummary"
export default function MyHeader(){

    return(
<header>
<div className="bg-red-900">
        <nav className="flex justify-between py-3 px-1 items-center container mx-auto 	">
            <div className="logo flex justify-between gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#78a3ad" d="M123.85 113.04c-1.92-4.63-3.9-9.21-5.82-13.8c-6.03-14.35-11.35-29.2-17.44-43.61c-6.05-14.3-10.89-29.05-16.58-43.48c-1.18-3-3.22-9.03-6.87-9.66c-7.85-1.35-8.04 10.17-8.2 14.89c-.27 8.56.86 17.05 1.54 25.57c.59 7.29.92 14.65 2.71 21.77c1.35 5.34 3.49 11.09 7.77 14.79c2.15 1.86 4.98 2.63 7.79 2.37c2.92-.26 5.63-2.29 8.61-1.96c.77.09 1.59.56 2.1 1.15c1.62 1.91 2.06 5.54 2.63 7.91c1.85 7.63 3.68 15.35 5.97 22.86c1.39 4.54 3.21 10.34 7.22 13.28c2.45 1.78 6.48 2.81 8.97.58c3.73-3.31 1.14-8.98-.4-12.66zM52.52 7.05c-1.43.19-2.22 5.09-2.67 6.54c-.79 2.61-1.55 6.14-2.77 9.47c-.01.03-.02.05-.03.07c-.09.23-.18.48-.29.74c-.11.25-.22.49-.32.74c-.72 1.59-1.77 3.42-3.01 4.1c-1.41.78-3.86-.12-4.39-1.63c-.87-2.46.48-7.07.43-7.23c.53-2.21 2-8.93 2.71-13.43c.05-.34.52-2.34-1.17-3.02c-.79-.31-1.84.18-2.47 1.42c-1.86 3.66-4.61 10.85-4.97 12c-.04.11-.08.24-.11.35c0 0-.01.02-.01.03c-.07.24-1.9 5.96-3.85 7.58c-1.02.85-3.16 1.16-4.77-.46c-.64-.65-.93-1.65-1.05-2.67c-.27-6.97 3.42-13.58 4.58-16.89c.33-.93 2.01-3.88.13-4.27c-2.83-.59-9.73 10.76-11.13 13.41c-3.46 6.6-5.71 14.04-4.78 21.55c.52 4.16 2.68 8.03 5.98 10.51c1.46 1.09 3.15 2.05 5 2.84c-4.97 15.78-10.22 32.23-13.42 41.31c-2.42 6.83-4.96 13.71-6.75 20.74c-1.07 4.2-2.45 9.18-.74 13.4c1.79 4.41 8.09 4.29 10.83.38c3.08-4.41 4.09-10.24 5.89-19.37c1.8-9.14 4.4-21.57 5.79-28.26c2.05-9.85 4.13-18.38 6.15-26.13c5.12.59 10.3-.37 13.95-3.71c1.6-1.46 2.87-3.23 3.92-5.12c1.6-2.86 2.88-6.12 3.56-9.33c.61-2.96 4.38-26.27-.22-25.66z"></path></svg>
    <h3 className="font-bold text-2xl text-white">Foody</h3>
            </div>
         <div >
            <span className="font-bold text-xl text-white">  <HeaderButton/> </span>
         </div>
        </nav>
      </div>
      <div className="hero bg-no-repeat bg-cover w-full	" style={{ backgroundImage: `url(${background})` , height : '60vh' }}>
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50"></div>
        <MealsSummary></MealsSummary>
      </div>
</header>
   
    )
}