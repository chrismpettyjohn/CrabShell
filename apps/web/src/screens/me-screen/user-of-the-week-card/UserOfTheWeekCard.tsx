export function UserOfTheWeekCard() {
  return (
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
  );
}
