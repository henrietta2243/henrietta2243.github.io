function getRandomPosts(numPosts) {
    const apiKey = process.env.BLOGGER_A;

    const blogId = '6079813804505380240';

    const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

    let displayedPostIds = [];

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const posts = data.items;

            const randomPosts = [];
                    for (let i = 0; i < numPosts; i++) {
                        let randomIndex;
                        do {
                            randomIndex = Math.floor(Math.random() * posts.length);
                        } while (displayedPostIds.includes(posts[randomIndex].id));
                        
                        randomPosts.push(posts[randomIndex]);
                        displayedPostIds.push(posts[randomIndex].id);
            }

            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = '';
            randomPosts.forEach(post => {
                    const image = post.content.match(/<img[^>]*src="([^"]+)"[^>]*>/);
                    const imageUrl = image ? image[1] : ''; 
                    if (imageUrl) {
                        postContainer.innerHTML += `
                            <div class="rndPostContainer">
                                <a href="${post.url}">
                                <span> ${post.title}</span>
                                    <div class="rel-image nnxt">
                                        <img src="${imageUrl}" alt="${post.title}">
                                    </div>
                                </a>
                            </div>
                        `;
                    }
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

}


window.onload = function() {
    getRandomPosts(6);
};
