export const dateFormat=(date)=>{
  
    const DATE= new Intl.DateTimeFormat('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric',
   }).format(new Date(date));
   return DATE;
   }
  