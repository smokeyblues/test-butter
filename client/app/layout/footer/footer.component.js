const footerComponent = {
  bindings: {},
  controller: function() {
    let ctrl = this;
  },

  template: `
  <footer class="container-footer">
    <div class="footer-top">

      <div class="footer-left">
        <contact-form></contact-form>
      </div>

      <div class="footer-right">
        <div class="contactHours">
          <div class="hours-header">Hours</div>
          <table>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>11:00am - 5:00pm</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>11:00am - 7:00pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>11:00am - 7:00pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>11:00am - 8:00pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>11:00am - 8:00pm</td>
              </tr>
            </tbody>
          </table>
          <div class="contactAddress">
            <h4>Rowdy Mermaid Kombucha</h4>
            <p>2516 49th ST, Unit 2</p>
            <p>Boulder, CO</p>
            <p>(303) 396-0498</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright-text">
        ROWDY MERMAID KOMBUCHA © 2017
      </div>
      <div class="footer-links">
        <a class="footer-link-icon" href="http://www.facebook.com/rowdymermaid" target="_blank">
          <i class="fa fa-facebook-official fa-lg"></i>
        </a>
        <a class="footer-link-icon" href="http://www.instagram.com/rowdymermaidkombucha" target="_blank">
          <i class="fa fa-instagram fa-lg"></i>
        </a>
        <a class="footer-link-icon" href="http://twitter.com/rowdymermaid" target="_blank">
          <i class="fa fa-twitter-square fa-lg"></i>
        </a>
        <a class="footer-link-icon" href="http://www.pinterest.com/rowdymermaid" target="_blank">
          <i class="fa fa-pinterest-square fa-lg"></i>
        </a>
      </div>
      <a class="link-to-top" href='#top'>Back to Top</a>
    </div>
	</footer>
	`
};

angular
  .module('RowdyMermaid-site.layout')
  .component('footerComponent', footerComponent);

footerComponent.$inject = [];
