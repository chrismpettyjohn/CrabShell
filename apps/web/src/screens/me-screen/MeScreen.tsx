import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";

const MeScreen: Component = () => {
  return (
    <GuardUser>
      <SiteTitle>Me</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="main-content">
          <div class="news-articles">
            <div class="container">
              <div
                class="card"
                style="
                background-image: url(https://swfs.habcrab.com/c_images/web_promo/airplane_webpromo.png);
              "
              >
                <div class="card-content">
                  <div class="label">Client</div>
                  <h3>Are you crabby?</h3>
                  <p>i'm a crab living a good crab life</p>
                  <span>Jan 25, 2025</span>
                </div>
              </div>
              <div
                class="card"
                style="
                background-image: url(https://swfs.habcrab.com/c_images/web_promo/ABBOBADOS_P01.png);
              "
              >
                <div class="card-content">
                  <div class="label">Client</div>
                  <h3>Room of the week</h3>
                  <p>i'm a crab living a good crab life</p>
                  <span>Jan 25, 2025</span>
                </div>
              </div>
              <div
                class="card"
                style="
                background-image: url(https://swfs.habcrab.com/c_images/web_promo/bubblejuice_largepromo.png);
              "
              >
                <div class="card-content">
                  <div class="label">Client</div>
                  <h3>Staff Applications</h3>
                  <p>i'm a crab living a good crab life</p>
                  <span>Jan 25, 2025</span>
                </div>
              </div>
              <div
                class="card"
                style="
                background-image: url(https://swfs.habcrab.com/c_images/web_promo/habbofun_battlefield_fansiteweek_2.png);
              "
              >
                <div class="card-content">
                  <div class="label">Client</div>
                  <h3>HabCrab Grand Opening</h3>
                  <p>i'm a crab living a good crab life</p>
                  <span>Jan 25, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="grid">
            <div class="column col-3">
              <div class="card">
                <h2>Users</h2>
                <div class="tabs-container">
                  <span class="active">Newest</span>
                  <span>Online</span>
                  <span>My Friends</span>
                </div>
                <div class="users-list">
                  <div class="row">
                    <div class="avatar-container">
                      <img
                        class="avatar"
                        src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>LeChris</h4>
                      <img
                        src="https://i.imgur.com/6Dq8uGr.png"
                        class="status"
                      />
                      <p>i eat oysters and have 10 legs</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="avatar-container">
                      <img
                        class="avatar"
                        src="{{imageURL}}?user=Tre&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Tre</h4>
                      <img
                        src="https://i.imgur.com/6Dq8uGr.png"
                        class="status"
                      />
                      <p>big crustaceans turn me on</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="avatar-container">
                      <img
                        class="avatar"
                        src="{{imageURL}}?user=angel&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>angel</h4>
                      <img
                        src="https://i.imgur.com/6Dq8uGr.png"
                        class="status"
                      />
                      <p>big crustaceans turn me on</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="avatar-container">
                      <img
                        class="avatar"
                        src="{{imageURL}}?user=Crab&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Crab</h4>
                      <img
                        src="https://i.imgur.com/6Dq8uGr.png"
                        class="status"
                      />
                      <p>big crustaceans turn me on</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="avatar-container">
                      <img
                        class="avatar"
                        src="{{imageURL}}?user=Lobster&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Lobster</h4>
                      <img
                        src="https://i.imgur.com/6Dq8uGr.png"
                        class="status"
                      />
                      <p>big crustaceans turn me on</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <h2>Groups</h2>
                <div class="tabs-container">
                  <span class="active">Newest</span>
                  <span>Popular</span>
                  <span>My Groups</span>
                </div>
                <div class="users-list">
                  <div class="row">
                    <div
                      class="avatar-container"
                      style="background-color: transparent;"
                    >
                      <img
                        class="avatar"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAghJREFUWEftmL1RxDAQhdeFkEBGB+TM0AElQBvXBpQAFTBDTgIhZJBQiJmV7929Wa9k6WxZDlBw4z9Zn57e7srXybH1dNz6sFOA8CMiff+Fw9ZcIt1l0KlTogD28yvy+tYe7PpK5PxsADzAPT6J4EYrRAh0d+vA6UV9oFVTxVSkIjjtBGg9tm2pCRXDrQWmEy6CWxOsCG5tsGy4FmDZcDB8yvwXN/kF5fslneAhRtRzGnElii0FBwF4fDcJI8/lKFZS7vblSKyCPA7gRnkOnVhezmWcx6AYSl5OwkYfhrNg9j3aJ5SvqRlpR4bygDDzWILWun2/G3zKqvPE2VYjOKtcTDGV3jbU5dg9D46rjvV8Es6WJF4aHgiQUD92z8LZcuiN5y6rt2xLwrHHMdam4GxGaAanAaBe9AIiWzn1hRp7alm9CuJtm1idHDgefxQQpXA5OQ7PxFIJK5eESw2GgHjYDXVSFbbfHPaaPa+2rAAH5PtzJx+fRx8pNGAAYZ9JlTx8P8BWRcv6D0cBeVCOlyQWrVY5eA9LiHN9zl5Lec0LCARPqBAlcBYyJ2JztlfsuU3BIUcilcyG8/Zj3iZ1SlnejSwCVwNMJzEbrhbYbLiaYLPgaoPNgpsy9hL3k54D/RIDnfIOFAA3lfALY59up6aLEliG036hSmyl7ctd+E8YLf/Pj/qzCFx/bwB4I3c7uW0AAAAASUVORK5CYII="
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Crabby Bois</h4>
                      <p>i eat oysters and have 10 legs</p>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="avatar-container"
                      style="background-color: transparent;"
                    >
                      <img
                        class="avatar"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAghJREFUWEftmL1RxDAQhdeFkEBGB+TM0AElQBvXBpQAFTBDTgIhZJBQiJmV7929Wa9k6WxZDlBw4z9Zn57e7srXybH1dNz6sFOA8CMiff+Fw9ZcIt1l0KlTogD28yvy+tYe7PpK5PxsADzAPT6J4EYrRAh0d+vA6UV9oFVTxVSkIjjtBGg9tm2pCRXDrQWmEy6CWxOsCG5tsGy4FmDZcDB8yvwXN/kF5fslneAhRtRzGnElii0FBwF4fDcJI8/lKFZS7vblSKyCPA7gRnkOnVhezmWcx6AYSl5OwkYfhrNg9j3aJ5SvqRlpR4bygDDzWILWun2/G3zKqvPE2VYjOKtcTDGV3jbU5dg9D46rjvV8Es6WJF4aHgiQUD92z8LZcuiN5y6rt2xLwrHHMdam4GxGaAanAaBe9AIiWzn1hRp7alm9CuJtm1idHDgefxQQpXA5OQ7PxFIJK5eESw2GgHjYDXVSFbbfHPaaPa+2rAAH5PtzJx+fRx8pNGAAYZ9JlTx8P8BWRcv6D0cBeVCOlyQWrVY5eA9LiHN9zl5Lec0LCARPqBAlcBYyJ2JztlfsuU3BIUcilcyG8/Zj3iZ1SlnejSwCVwNMJzEbrhbYbLiaYLPgaoPNgpsy9hL3k54D/RIDnfIOFAA3lfALY59up6aLEliG036hSmyl7ctd+E8YLf/Pj/qzCFx/bwB4I3c7uW0AAAAASUVORK5CYII="
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Crabby Bois</h4>
                      <p>i eat oysters and have 10 legs</p>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="avatar-container"
                      style="background-color: transparent;"
                    >
                      <img
                        class="avatar"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAghJREFUWEftmL1RxDAQhdeFkEBGB+TM0AElQBvXBpQAFTBDTgIhZJBQiJmV7929Wa9k6WxZDlBw4z9Zn57e7srXybH1dNz6sFOA8CMiff+Fw9ZcIt1l0KlTogD28yvy+tYe7PpK5PxsADzAPT6J4EYrRAh0d+vA6UV9oFVTxVSkIjjtBGg9tm2pCRXDrQWmEy6CWxOsCG5tsGy4FmDZcDB8yvwXN/kF5fslneAhRtRzGnElii0FBwF4fDcJI8/lKFZS7vblSKyCPA7gRnkOnVhezmWcx6AYSl5OwkYfhrNg9j3aJ5SvqRlpR4bygDDzWILWun2/G3zKqvPE2VYjOKtcTDGV3jbU5dg9D46rjvV8Es6WJF4aHgiQUD92z8LZcuiN5y6rt2xLwrHHMdam4GxGaAanAaBe9AIiWzn1hRp7alm9CuJtm1idHDgefxQQpXA5OQ7PxFIJK5eESw2GgHjYDXVSFbbfHPaaPa+2rAAH5PtzJx+fRx8pNGAAYZ9JlTx8P8BWRcv6D0cBeVCOlyQWrVY5eA9LiHN9zl5Lec0LCARPqBAlcBYyJ2JztlfsuU3BIUcilcyG8/Zj3iZ1SlnejSwCVwNMJzEbrhbYbLiaYLPgaoPNgpsy9hL3k54D/RIDnfIOFAA3lfALY59up6aLEliG036hSmyl7ctd+E8YLf/Pj/qzCFx/bwB4I3c7uW0AAAAASUVORK5CYII="
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Crabby Bois</h4>
                      <p>i eat oysters and have 10 legs</p>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="avatar-container"
                      style="background-color: transparent;"
                    >
                      <img
                        class="avatar"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAghJREFUWEftmL1RxDAQhdeFkEBGB+TM0AElQBvXBpQAFTBDTgIhZJBQiJmV7929Wa9k6WxZDlBw4z9Zn57e7srXybH1dNz6sFOA8CMiff+Fw9ZcIt1l0KlTogD28yvy+tYe7PpK5PxsADzAPT6J4EYrRAh0d+vA6UV9oFVTxVSkIjjtBGg9tm2pCRXDrQWmEy6CWxOsCG5tsGy4FmDZcDB8yvwXN/kF5fslneAhRtRzGnElii0FBwF4fDcJI8/lKFZS7vblSKyCPA7gRnkOnVhezmWcx6AYSl5OwkYfhrNg9j3aJ5SvqRlpR4bygDDzWILWun2/G3zKqvPE2VYjOKtcTDGV3jbU5dg9D46rjvV8Es6WJF4aHgiQUD92z8LZcuiN5y6rt2xLwrHHMdam4GxGaAanAaBe9AIiWzn1hRp7alm9CuJtm1idHDgefxQQpXA5OQ7PxFIJK5eESw2GgHjYDXVSFbbfHPaaPa+2rAAH5PtzJx+fRx8pNGAAYZ9JlTx8P8BWRcv6D0cBeVCOlyQWrVY5eA9LiHN9zl5Lec0LCARPqBAlcBYyJ2JztlfsuU3BIUcilcyG8/Zj3iZ1SlnejSwCVwNMJzEbrhbYbLiaYLPgaoPNgpsy9hL3k54D/RIDnfIOFAA3lfALY59up6aLEliG036hSmyl7ctd+E8YLf/Pj/qzCFx/bwB4I3c7uW0AAAAASUVORK5CYII="
                      />
                    </div>
                    <div class="avatar-info">
                      <h4>Crabby Bois</h4>
                      <p>i eat oysters and have 10 legs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-6">
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
                    sometimes i like to rub butter on myself and take a bath
                    where the water slowly gets warmer and pretend i'm a crab
                    living a good crab life
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
                    sometimes i like to rub butter on myself and take a bath
                    where the water slowly gets warmer and pretend i'm a crab
                    living a good crab life
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
            </div>
            <div class="column col-3">
              <div class="calendar-container">
                <div class="calendar-header">
                  <h2>January 2025</h2>
                  <div class="navigation">
                    <button>&lt;</button>
                    <button>&gt;</button>
                  </div>
                </div>
                <div class="calendar">
                  <div class="day-names">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fru</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div class="days">
                    <span class="prev-month">29</span>
                    <span class="prev-month">30</span>
                    <span class="prev-month">31</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                    <span class="active">24</span>
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                  </div>
                </div>
                <div class="event-plan">
                  <div class="event">
                    <span class="time">09:00pm</span>
                    <div class="details">
                      <h4>Prayer Group</h4>
                      <p>BYOB. Bring your own Bible.</p>
                    </div>
                  </div>
                  <div class="event">
                    <span class="time">11:00am</span>
                    <div class="details">
                      <h4>Hail Mary Chants</h4>
                      <p>Don't worry, we'll repeat a lot.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card"
                style="display:flex;height:fit-content;justify-content: center;"
              >
                <div class="user-week-container">
                  <div class="congrats">Congratulations!</div>
                  <h2>User of the Week</h2>
                  <div class="podium-container">
                    <div class="user-avatar">
                      <img
                        src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
                        alt="User Avatar"
                      />
                    </div>
                  </div>
                  <div class="user-name">HabboHero123</div>
                  <div class="user-rank">Top Contributor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </GuardUser>
  );
};

export default MeScreen;
