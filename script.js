
// hanburger

const hamburger = document.getElementById('hamburgers');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// //   Readmore/Readless
//   document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton1');
//     const moreTextItems = document.querySelectorAll('.more-text1');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });

//   document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton2');
//     const moreTextItems = document.querySelectorAll('.more-text2');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton3');
//     const moreTextItems = document.querySelectorAll('.more-text3');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton4');
//     const moreTextItems = document.querySelectorAll('.more-text4');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton5');
//     const moreTextItems = document.querySelectorAll('.more-text5');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton6');
//     const moreTextItems = document.querySelectorAll('.more-text6');
    
//     toggleButton.addEventListener('click', function () {
//         moreTextItems.forEach(item => {
//             if (item.style.display === 'none' || item.style.display === '') {
//                 item.style.display = 'list-item';
//                 toggleButton.textContent = 'Read Less';
//             } else {
//                 item.style.display = 'none';
//                 toggleButton.textContent = 'Read More';
//             }
//         });
//     });
// });


// form-section

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     // Prevent the form from submitting right away
//     event.preventDefault();
    
//     // Perform form validation
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const country = document.getElementById('country').value;
//     const email = document.getElementById('email').value;
//     const Message = document.getElementById('Message').value;

//     if (name === '' || phone === '' || country === '' || email === '' || Message === '') {
//         alert('Please fill out all fields.');
//         return;
//     }


//     if (!/\S+@\S+\.\S+/.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     // If validation passes, submit the form (or handle it as needed)
//     alert('Form submitted successfully!');
//     this.submit();
// });