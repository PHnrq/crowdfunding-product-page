import { Container } from "./styles";

import closeModalImg from "../../assets/images/icon-close-modal.svg";

export function Modal() {
  return (
    <Container>
      <div>
        <div id="headerModal">
          <h3>Back this project</h3>
          <img src={closeModalImg} alt="Fechar" />
        </div>

        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <fieldset>
          <div>
            <div>
              <input type="radio" name="reward" id="noReward" />
              <label htmlFor="noReward">Pledge with no reward</label>
            </div>

            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>

          <div>
            <div>
              <input type="radio" name="reward" id="noReward" />
              <label htmlFor="noReward">
                Bamboo Stand
                <span>Pledge $25 or more</span>
              </label>
            </div>

            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>

            <div className="productAmount">
              <p>
                101 <span>left</span>
              </p>
            </div>
          </div>

          <div>
            <div>
              <input type="radio" name="reward" id="noReward" />
              <label htmlFor="noReward">
                Black Edition Stand
                <span>Pledge $75 or more</span>
              </label>
            </div>

            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>

            <div className="productAmount">
              <p>
                64 <span>left</span>
              </p>
            </div>
          </div>

          <div>
            <div>
              <input type="radio" name="reward" id="noReward" />
              <label htmlFor="noReward">
                Mahogany Special Edition
                <span>Pledge $200 or more</span>
              </label>
            </div>

            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>

            <div className="productAmount">
              <p>
                0 <span>left</span>
              </p>
            </div>
          </div>
        </fieldset>
      </div>
    </Container>
  );
}
