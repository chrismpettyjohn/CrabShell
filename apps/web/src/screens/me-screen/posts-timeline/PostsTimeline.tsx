export function PostsTimeline() {
  return (
    <>
      <div class="post-card">
        <div class="post-header">
          <div class="avatar-container">
            <img
              src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
              alt="User Avatar"
              class="avatar"
            />
          </div>
          <div class="post-details">
            <p class="post-text">
              <strong>Chris</strong> posted on their timeline
            </p>
            <p class="post-time">5 minutes ago</p>
          </div>
        </div>
        <div class="post-content">
          <p>
            sometimes i like to rub butter on myself and take a bath where the
            water slowly gets warmer and pretend i'm a crab living a good crab
            life
          </p>
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
            <div class="action">
              <i class="fa fa-thumbs-up"></i>
            </div>
            <div class="action">
              <i class="fa fa-comment"></i>
            </div>
            <div class="action">
              <i class="fa fa-share"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="post-card">
        <div class="post-header">
          <div class="avatar-container">
            <img
              src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
              alt="User Avatar"
              class="avatar"
            />
          </div>
          <div class="post-details">
            <p class="post-text">
              <strong>Chris</strong> posted on their timeline
            </p>
            <p class="post-time">5 minutes ago</p>
          </div>
        </div>
        <div class="post-content">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qA1Ozm2fVA4?si=Snb1hl1lzxdwaG7u"
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
      <div class="post-card">
        <div class="post-header">
          <div class="avatar-container">
            <img
              src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
              alt="User Avatar"
              class="avatar"
            />
          </div>
          <div class="post-details">
            <p class="post-text">
              <strong>Chris</strong> posted on their timeline
            </p>
            <p class="post-time">5 minutes ago</p>
          </div>
        </div>
        <div class="post-content">
          <p>
            sometimes i like to rub butter on myself and take a bath where the
            water slowly gets warmer and pretend i'm a crab living a good crab
            life
          </p>
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
