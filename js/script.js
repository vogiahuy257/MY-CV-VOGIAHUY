
function changeActive(element) {
    // Lấy tất cả các thẻ li trong menu
    var menuItems = document.querySelectorAll('.menu li');

    // Loại bỏ lớp 'active' từ tất cả các thẻ li
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Thêm lớp 'active' cho thẻ li chứa liên kết được nhấp
    element.parentNode.classList.add('active');
  }

  // Hàm thay đổi trạng thái active và cuộn đến phần hero
function changeActiveAndScroll() {
    // Lấy chiều cao của thanh header
    var headerHeight = document.querySelector('.header').offsetHeight;
  
    // Lấy vị trí hiện tại của thanh cuộn
    var scrollPosition = window.scrollY;
  
    // Lấy vị trí của phần hero
    var heroSection = document.querySelector('.hero');
    var heroPosition = heroSection.offsetTop - headerHeight; // Đảm bảo rằng phần hero nằm dưới thanh header
  
    // Lấy thẻ a mang chữ "Home" trong nav
    var homeLink = document.querySelector('.menu li:first-child a');
  
    // Nếu vị trí cuộn lớn hơn hoặc bằng vị trí của phần hero
    if (scrollPosition >= heroPosition) {
      // Thêm lớp "active" cho thẻ a mang chữ "Home"
      homeLink.classList.add('active');
  
      // Loại bỏ lớp "active" từ tất cả các thẻ a khác trong nav
      var otherLinks = document.querySelectorAll('.menu li:not(:first-child) a');
      otherLinks.forEach(function (link) {
        link.classList.remove('active');
      });
    } else {
      // Nếu không, loại bỏ lớp "active" từ thẻ a mang chữ "Home"
      homeLink.classList.remove('active');
    }
  }
  
  // Gọi hàm khi trang được tải và khi có sự kiện cuộn
  window.addEventListener('load', changeActiveAndScroll);
  window.addEventListener('scroll', changeActiveAndScroll);
  
  // Hàm cuộn đến phần hero khi nhấp vào liên kết "Home"
  function scrollToHero() {
    // Lấy chiều cao của thanh header
    var headerHeight = document.querySelector('.header').offsetHeight;
  
    // Lấy vị trí của phần hero
    var heroSection = document.querySelector('.hero');
    var heroPosition = heroSection.offsetTop - headerHeight; // Đảm bảo rằng phần hero nằm dưới thanh header
  
    // Cuộn đến vị trí của phần hero
    window.scrollTo({
      top: heroPosition,
      behavior: 'smooth'
    });
  }
  
  // Gán sự kiện click cho liên kết "Home"
  var homeLink = document.querySelector('.menu li:first-child a');
  homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToHero();
  });
  
  // Gán sự kiện cuộn để theo dõi vị trí và cập nhật trạng thái active
  window.addEventListener('scroll', changeActiveAndScroll);
  


  
//================================= Home sang Courses =============================

// Get the header and hero elements
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

// Get the navigation items
const navItems = document.querySelectorAll('.menu ul li');

// Function to update the active state of navigation items
function updateActiveNavItem() {
  const heroBottom = hero.getBoundingClientRect().bottom;
  
  // Check if the hero is below the header
  if (heroBottom > header.offsetHeight) {
    // Remove the 'active' class from all navigation items
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add the 'active' class to the first navigation item (Home)
    navItems[0].classList.add('active');
  } else {
    // If the hero is above the header, remove the 'active' class from all items
    navItems.forEach(item => item.classList.remove('active'));
    navItems[1].classList.add('active');
  }
}

// Add a scroll event listener to update the active state on scroll
window.addEventListener('scroll', updateActiveNavItem);

