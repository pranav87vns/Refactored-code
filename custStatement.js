import custRecord from '../Data/custRecord';
import movieData from '../Data/MovieData';
import MOVIE_CODE from '../utils/constants';

const custStatement = () => {   
     let totalAmount = 0;    
     let frequentRenterPoints = 0;    
     let result = `Rental Record for ${custRecord.name}\n`;
    if (custRecord && custRecord.rentals > 0) {        
    for (let r of custRecord.rentals) {           
         let movie = movieData && movieData[r.movieID];            
         let rentAmount = 0;
            // determine amount for each movie           
 switch (movie.code) {                
     
    case MOVIE_CODE.REGULAR:                    
    rentAmount = 2;                    
    if (r.days > 2) {                        
        rentAmount += (r.days - 2) * 1.5;                    
    }                    break;                
    case MOVIE_CODE.NEW:                    
    rentAmount = r.days * 3;                   
     break;               
      case MOVIE_CODE.CHILDRENS:                    
      rentAmount = 1.5;                    
      if (r.days > 3) {                       
           rentAmount += (r.days - 3) * 1.5;                    }                    
           break;            }
            //add frequent renter points            
frequentRenterPoints++;
            // add bonus for a two day new release rental           
 if (movie.code === "new" && r.days > 2)                
 frequentRenterPoints++;
            //print figures for this rental           
 result += `\t${movie.title}\t${rentAmount}\n`;           
  totalAmount += rentAmount;        }    }   
   // add footer lines    
   result += `Amount owed is ${totalAmount}\n`;    
   result += `You earned ${frequentRenterPoints} frequent renter points\n`;
    return result;};

