// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  // Get elements from the page
  const postForm = document.getElementById("postForm");
  const postTitle = document.getElementById("postTitle");
  const postText = document.getElementById("postText");
  const postType = document.getElementById("postType");
  const postFile = document.getElementById("postFile");
  const previewBox = document.getElementById("previewBox");
  const feedContainer = document.getElementById("feedContainer");
  const themeBtn = document.getElementById("themeBtn");
  const clearBtn = document.getElementById("clearBtn");

  // Show a preview when the user selects a file
  postFile.addEventListener("change", () => {
    const file = postFile.files[0];

    // If no file selected, reset preview text
    if (!file) {
      previewBox.innerHTML = "<p>No media selected yet.</p>";
      return;
    }

    // Use FileReader to convert the file into a data URL we can display
    const reader = new FileReader();

    reader.onload = () => {
      // If it's an image, display an <img> tag
      if (file.type.startsWith("image/")) {
        previewBox.innerHTML = `<img src="${reader.result}" alt="Preview image">`;
      }
      // If it's a video, display a <video> tag with controls
      else if (file.type.startsWith("video/")) {
        previewBox.innerHTML = `
          <video controls>
            <source src="${reader.result}" type="${file.type}">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        previewBox.innerHTML = "<p>This file type cannot be previewed.</p>";
      }
    };

    reader.readAsDataURL(file);
  });

  // Add a new post to the feed when the form is submitted
  postForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the page from reloading

    const title = postTitle.value.trim();
    const caption = postText.value.trim();
    const type = postType.value;
    const file = postFile.files[0];

    // Default media if no file is uploaded
    let mediaHTML = `<div class="post-media placeholder"><p>No media uploaded.</p></div>`;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.startsWith("image/")) {
          mediaHTML = `<div class="post-media"><img src="${reader.result}" alt="${title}"></div>`;
        } else if (file.type.startsWith("video/")) {
          mediaHTML = `
            <div class="post-media">
              <video controls>
                <source src="${reader.result}" type="${file.type}">
              </video>
            </div>
          `;
        }

        // Add the post once mediaHTML is ready
        addPost(title, caption, type, mediaHTML);
      };

      reader.readAsDataURL(file);
    } else {
      // Text-only post
      addPost(title, caption, type, mediaHTML);
    }

    // Reset form and preview
    postForm.reset();
    previewBox.innerHTML = "<p>No media selected yet.</p>";
  });

  // Function that creates the post card and inserts it into the feed
  function addPost(title, caption, type, mediaHTML) {
    const post = document.createElement("article");
    post.className = "post-card";

    post.innerHTML = `
      ${mediaHTML}
      <div class="post-content">
        <h3>${title}</h3>
        <p>${caption}</p>
        <span class="tag">${type.toUpperCase()}</span>
      </div>
    `;

    // Add the new post to the top of the feed
    feedContainer.prepend(post);
  }

  // Toggle between light and dark mode by adding/removing the "dark" class
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Clear the preview and file input
  clearBtn.addEventListener("click", () => {
    postFile.value = "";
    previewBox.innerHTML = "<p>No media selected yet.</p>";
  });
});
