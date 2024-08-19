const blogPosts = [
    {
        title: "React Hooks: From Basics to Advanced",
        date: "2024-08-06",
        author: "Tran Duc Thinh",
        content: "React Hooks have revolutionized how we write components in React. This article delves into popular hooks such as useState, useEffect, and useContext, along with best practices for using them. We will also explore custom hooks and how they can help reuse logic across components."
    },
    {
        title: "CSS Grid and Flexbox: Building Modern Layouts",
        date: "2024-08-05",
        author: "Nguyen Thi Mai Anh",
        content: "CSS Grid and Flexbox are powerful tools for creating layouts. This article compares the two techniques and indicates when to use each. We will build some complex, responsive layouts using a combination of Grid and Flexbox and discuss strategies to ensure compatibility across different browsers."
    },
    {
        title: "Python Data Analysis: Pandas and Matplotlib",
        date: "2024-08-04",
        author: "Le Hoang Nam",
        content: "Pandas and Matplotlib are a perfect duo for data analysis in Python. This article guides you on how to use Pandas to handle large datasets, perform statistical calculations, and visualize results with Matplotlib. We will work with a real dataset to understand how to apply these techniques in real-world data analysis projects."
    },
    {
        title: "JavaScript: Asynchronous Programming Deep Dive",
        date: "2024-08-03",
        author: "Pham Minh Tuan",
        content: "Asynchronous programming is a crucial part of modern JavaScript. This article takes a deep dive into how JavaScript handles asynchronous tasks, from callbacks to Promises and async/await. We will explore the event loop, microtasks, and macrotasks, and uncover patterns to manage complex asynchronous flows in real-world applications."
    },
    {
        title: "C++20: New Features and Enhancements",
        date: "2024-08-02",
        author: "Hoang Duc Minh",
        content: "C++20 introduces many exciting new features. This article explores features such as concepts, ranges, and coroutines. We will discuss how these features improve code readability, performance, and safety. Additionally, we will look at best practices for incorporating these new features into existing projects."
    },
    {
        title: "Java: Microservices with Spring Boot",
        date: "2024-08-01",
        author: "Ngo Bao Tram",
        content: "Microservices are becoming a trend in enterprise application development. This article will guide you on building microservices using Spring Boot and Spring Cloud. We will explore service discovery, config management, and inter-service communication. The article will also discuss challenges in deploying microservices and ways to overcome them."
    },
    {
        title: "Responsive Web Design: Beyond Bootstrap",
        date: "2024-07-31",
        author: "Do Quang Huy",
        content: "While Bootstrap is a great tool, sometimes we need more control over our designs. This article will explore advanced responsive design techniques such as CSS Grid, Custom Properties (CSS Variables), and Container Queries. We will learn how to create complex, flexible layouts while ensuring performance and maintainability."
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
                <div class="metadata">Posted by ${post.author} enter ${post.date}</div>
                <div class="excerpt">${post.content.substring(0, 150)}...</div>
                <a href="#" class="read-more" data-title="${post.title}">Continue reading</a>
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
        blogPostsContainer.innerHTML = '<p>No matching articles were found.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-6 mb-4';
        postElement.innerHTML = `
            <div class="blog-post">
                <h3>${post.title}</h3>
                <div class="metadata">Posted by ${post.author} vào ${post.date}</div>
                <div class="excerpt">${post.content.substring(0, 150)}...</div>
                <a href="#" class="read-more" data-title="${post.title}">Continue reading</a>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    document.getElementById('pagination').style.display = 'none';
}


