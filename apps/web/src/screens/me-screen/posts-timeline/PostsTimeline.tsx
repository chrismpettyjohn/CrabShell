export function PostsTimeline() {
  return (
    <>
      <div class="post-card">
        <div class="post-header">
          <div class="avatar-container">
            <img
              src="http://localhost:3000/assets/img/logo.png"
              alt="User Avatar"
              class="avatar"
              style="object-fit:contain;"
            />
          </div>
          <div class="post-details">
            <p class="post-text">
              <strong>HabCrab</strong> posted on their timeline
            </p>
          </div>
        </div>
        <div class="post-content">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LDU_Txk06tM?autoplay=1&start=35"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="post-tags">
          <div class="chip">Client</div>
          <div class="chip">Event</div>
        </div>
        <div class="post-footer">
          <div class="post-reactions">
            <span class="fa fa-heart"></span> 21
          </div>
          <div class="post-actions">
            <span>React</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
}
