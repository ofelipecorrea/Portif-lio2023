function validateDate(input) {
               const dateRegex = /^(\d{2})\/(\d{2})\/(20[1-2][5-9]|202[0-3])$/;
               if (dateRegex.test(input.value)) {
                   const [, day, month, year] = input.value.match(dateRegex);
                   const date = new Date(`${year}-${month}-${day}`);
                   if (!isNaN(date.getTime())) {
                       input.setCustomValidity('');
                   } else {
                       input.setCustomValidity('Invalid date');
                   }
               } else {
                   input.setCustomValidity('Invalid format (dd/mm/yyyy) or out of range (2015-2023)');
               }
           }