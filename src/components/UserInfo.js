class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    if (data.job) {
      this._jobElement.textContent = data.job;
    } else {
      this._jobElement.textContent = data.about;
    }
  }

  setAvatar(newAvatar) {
    this._avatarElement.src = newAvatar;
  }
}

export default UserInfo;
