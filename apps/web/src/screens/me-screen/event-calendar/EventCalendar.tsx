export function EventCalendar() {
  return (
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
  );
}
