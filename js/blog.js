const blogPosts = [
    {
        title: "React Hooks: Từ Cơ Bản Đến Nâng Cao",
        date: "2024-08-06",
        author: "Trần Đức Thịnh",
        content: "React Hooks đã cách mạng hóa cách chúng ta viết components trong React. Bài viết này sẽ đi sâu vào các hooks phổ biến như useState, useEffect, và useContext, cùng với các best practices khi sử dụng chúng. Chúng ta cũng sẽ tìm hiểu về custom hooks và cách chúng có thể giúp tái sử dụng logic giữa các components."
    },
    {
        title: "CSS Grid và Flexbox: Xây Dựng Layouts Hiện Đại",
        date: "2024-08-05",
        author: "Nguyễn Thị Mai Anh",
        content: "CSS Grid và Flexbox là hai công cụ mạnh mẽ cho việc tạo layouts. Bài viết này so sánh hai kỹ thuật, chỉ ra khi nào nên sử dụng cái nào. Chúng ta sẽ xây dựng một số layout phức tạp, responsive sử dụng kết hợp cả Grid và Flexbox, đồng thời thảo luận về các chiến lược để đảm bảo tương thích trên các trình duyệt khác nhau."
    },
    {
        title: "Python Data Analysis: Pandas và Matplotlib",
        date: "2024-08-04",
        author: "Lê Hoàng Nam",
        content: "Pandas và Matplotlib là bộ đôi hoàn hảo cho phân tích dữ liệu trong Python. Bài viết này sẽ hướng dẫn cách sử dụng Pandas để xử lý dữ liệu lớn, thực hiện các phép tính thống kê, và cách trực quan hóa kết quả với Matplotlib. Chúng ta sẽ làm việc với một bộ dữ liệu thực tế để hiểu cách áp dụng các kỹ thuật này trong các dự án phân tích dữ liệu thực tế."
    },
    {
        title: "JavaScript: Asynchronous Programming Deep Dive",
        date: "2024-08-03",
        author: "Phạm Minh Tuấn",
        content: "Lập trình bất đồng bộ là một phần quan trọng của JavaScript hiện đại. Bài viết này sẽ đi sâu vào cách JavaScript xử lý các tác vụ bất đồng bộ, từ callbacks đến Promises và async/await. Chúng ta sẽ tìm hiểu về event loop, microtasks và macrotasks, đồng thời khám phá các pattern để quản lý luồng bất đồng bộ phức tạp trong các ứng dụng thực tế."
    },
    {
        title: "C++20: Các Tính Năng Mới và Cải Tiến",
        date: "2024-08-02",
        author: "Hoàng Đức Minh",
        content: "C++20 giới thiệu nhiều tính năng mới thú vị. Bài viết này sẽ khám phá các tính năng như concepts, ranges, và coroutines. Chúng ta sẽ thảo luận về cách các tính năng này cải thiện khả năng đọc, hiệu suất và an toàn của code C++. Đồng thời, chúng ta cũng sẽ xem xét các best practices khi áp dụng các tính năng mới này vào các dự án hiện có."
    },
    {
        title: "Java: Microservices với Spring Boot",
        date: "2024-08-01",
        author: "Ngô Bảo Trâm",
        content: "Microservices đang trở thành xu hướng trong phát triển ứng dụng enterprise. Bài viết này sẽ hướng dẫn cách xây dựng microservices sử dụng Spring Boot và Spring Cloud. Chúng ta sẽ tìm hiểu về service discovery, config management, và inter-service communication. Bài viết cũng sẽ thảo luận về các thách thức khi triển khai microservices và cách khắc phục chúng."
    },
    {
        title: "Responsive Web Design: Beyond Bootstrap",
        date: "2024-07-31",
        author: "Đỗ Quang Huy",
        content: "Mặc dù Bootstrap là một công cụ tuyệt vời, nhưng đôi khi chúng ta cần more control over our designs. Bài viết này sẽ khám phá các kỹ thuật responsive design nâng cao như CSS Grid, Custom Properties (CSS Variables), và Container Queries. Chúng ta sẽ học cách tạo ra các layouts phức tạp, linh hoạt mà vẫn đảm bảo hiệu suất và khả năng bảo trì."
    }
];

let currentPage = 1;
const postsPerPage = 4;

function renderBlogPosts(page = 1) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = blogPosts.slice(startIndex, endIndex);

    paginatedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-6 mb-4';
        postElement.innerHTML = `
            <div class="blog-post">
                <h3>${post.title}</h3>
                <div class="metadata">Đăng bởi ${post.author} vào ${post.date}</div>
                <div class="excerpt">${post.content.substring(0, 150)}...</div>
                <a href="#" class="read-more" data-title="${post.title}">Đọc tiếp</a>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
        paginationContainer.appendChild(li);
    }
}

function searchGoogleBooks(query) {
    const googleBooksUrl = `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(query)}`;
    window.open(googleBooksUrl, '_blank');
}

function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    const categories = ['JavaScript', 'Python', 'React', 'CSS', 'Java', 'C++'];

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'col-6 mb-2';
        categoryElement.innerHTML = `<span class="category-item">${category}</span>`;
        categoriesContainer.appendChild(categoryElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    renderCategories();
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('read-more')) {
        e.preventDefault();
        const bookTitle = e.target.getAttribute('data-title');
        searchGoogleBooks(bookTitle);
    }

    if (e.target && e.target.classList.contains('page-link')) {
        e.preventDefault();
        currentPage = parseInt(e.target.getAttribute('data-page'));
        renderBlogPosts(currentPage);
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    if (query) {
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.content.toLowerCase().includes(query.toLowerCase())
        );
        renderFilteredPosts(filteredPosts);
    }
});

function renderFilteredPosts(filteredPosts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p>Không tìm thấy bài viết phù hợp.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-6 mb-4';
        postElement.innerHTML = `
            <div class="blog-post">
                <h3>${post.title}</h3>
                <div class="metadata">Đăng bởi ${post.author} vào ${post.date}</div>
                <div class="excerpt">${post.content.substring(0, 150)}...</div>
                <a href="#" class="read-more" data-title="${post.title}">Đọc tiếp</a>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    document.getElementById('pagination').style.display = 'none';
}