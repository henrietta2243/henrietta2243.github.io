async function fetchRecentPosts(blogId, maxResults = 8) {
    const apiKey = 'AIzaSyAXOGhTqzZAcPWt91G-XdX8srcBhIJH8To';
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?maxResults=${maxResults}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
            displayPosts(data.items);
        } else {
            document.getElementById("blog-posts").innerHTML = "No posts found.";
            console.error("No posts found", data);
        }
    } catch (error) {
        document.getElementById("blog-posts").innerHTML = "Error loading posts.";
        console.error("Error fetching posts:", error);
    }
}

function extractFirstImage(content) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const imgTag = tempDiv.querySelector("img");
    return imgTag ? imgTag.src : 'https://via.placeholder.com/100';
}

function displayPosts(posts) {
    const container = document.getElementById("recent-container");
    container.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("themes");
        
        const imageUrl = extractFirstImage(post.content);

        postElement.innerHTML = `
                <a class="image" href="${post.url}" target="_blank">
                    <img src="${imageUrl}" alt=" " loading="lazy" loading="lazy">
                    <span class="masked">${post.title}</span>
                </a>
        `;
        container.appendChild(postElement);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetchRecentPosts('6079813804505380240', 8); 
});