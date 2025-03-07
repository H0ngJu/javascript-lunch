var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _name, _distance, _description, _category, _createHeader, _bindEvent, _createRestaurantIcon, _getImageSrc, _createRestaurantInfo, _createRestaurantItem, _crerateButton, _createInputDropDown, _addTemplate, _createInputText, _handleName, _handleDescription, _handleLink, _modal, _cancelButton, _addButton, _divCategory, _divName, _divDistance, _divDescription, _divLink, _modalForm, _init, _createButton, _appendChildToModalForm, _createAddModal, _addHandler, _validateInputs, _bindEvent2;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const DOM = {
  APP: document.getElementById("app"),
  RESTAURANT_LIST: document.getElementById("restaurant-list")
};
class Restaurant {
  constructor(name, distance, description, category) {
    __privateAdd(this, _name);
    __privateAdd(this, _distance);
    __privateAdd(this, _description);
    __privateAdd(this, _category);
    __privateSet(this, _name, name);
    __privateSet(this, _distance, distance);
    __privateSet(this, _description, description);
    __privateSet(this, _category, category);
  }
  getName() {
    return String(__privateGet(this, _name));
  }
  getDistance() {
    return String(__privateGet(this, _distance));
  }
  getDescription() {
    return String(__privateGet(this, _description));
  }
  getCategory() {
    return String(__privateGet(this, _category));
  }
}
_name = new WeakMap();
_distance = new WeakMap();
_description = new WeakMap();
_category = new WeakMap();
const Rest1 = new Restaurant(
  "피양콩할마니",
  "10",
  "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
  "한식"
);
const Rest2 = new Restaurant(
  "친친",
  "5",
  "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다",
  "중식"
);
const Rest3 = new Restaurant(
  "잇쇼우",
  "10",
  "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다",
  "한식"
);
const Rest4 = new Restaurant("이태리키친", "20", "늘 변화를 추구하는 이태리키친입니다.", "양식");
const Rest5 = new Restaurant("호아빈 삼성점", "15", "푸짐한 양에 국물이 일품인 쌀국수", "아시안");
const Rest6 = new Restaurant("도스타코스 선릉점", "5", "멕시칸 캐주얼 그릴", "기타");
const RestaurantList = [Rest1, Rest2, Rest3, Rest4, Rest5, Rest6];
const HEADER_TEMPLATE = `
  <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
  <button type="button" class="gnb__button" aria-label="음식점 추가">
    <img src="https://h0ngju.github.io/javascript-lunch/public/assets/add-button.png" alt="음식점 추가">
  </button>
`;
class Header {
  constructor(addRestaurantModal2) {
    __privateAdd(this, _createHeader, () => {
      const header = document.createElement("header");
      header.classList = "gnb";
      header.innerHTML = HEADER_TEMPLATE;
      DOM.APP.prepend(header);
    });
    __privateAdd(this, _bindEvent, () => {
      const addButton = document.querySelector(".gnb__button");
      addButton.addEventListener("click", () => {
        this.addRestaurantModal.openModal();
      });
    });
    this.addRestaurantModal = addRestaurantModal2;
    __privateGet(this, _createHeader).call(this);
    __privateGet(this, _bindEvent).call(this);
  }
}
_createHeader = new WeakMap();
_bindEvent = new WeakMap();
const CATEGORY = Object.freeze({
  KOREAN: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-korean.png",
    ALT: "한식"
  },
  CHINESE: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-chinese.png",
    ALT: "중식"
  },
  JAPANESE: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-japanese.png",
    ALT: "일식"
  },
  WESTERN: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-western.png",
    ALT: "양식"
  },
  ASIAN: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-asian.png",
    ALT: "아시안"
  },
  ETC: {
    SRC: "https://h0ngju.github.io/javascript-lunch/public/assets/category-etc.png",
    ALT: "기타"
  }
});
const RESTAURANT_ICON = (src, alt) => {
  return `<img src=${src} alt=${alt} class="category-icon">`;
};
class RestaurantIcon {
  constructor(category) {
    __privateAdd(this, _createRestaurantIcon, (category) => {
      const divIcon = document.createElement("div");
      divIcon.classList = "restaurant__category";
      divIcon.innerHTML = RESTAURANT_ICON(__privateGet(this, _getImageSrc).call(this, category), category);
      return divIcon;
    });
    __privateAdd(this, _getImageSrc, (category) => {
      if (category === CATEGORY.KOREAN.ALT) return CATEGORY.KOREAN.SRC;
      if (category === CATEGORY.CHINESE.ALT) return CATEGORY.CHINESE.SRC;
      if (category === CATEGORY.JAPANESE.ALT) return CATEGORY.JAPANESE.SRC;
      if (category === CATEGORY.WESTERN.ALT) return CATEGORY.WESTERN.SRC;
      if (category === CATEGORY.ASIAN.ALT) return CATEGORY.ASIAN.SRC;
      if (category === CATEGORY.ETC.ALT) return CATEGORY.ETC.SRC;
    });
    return __privateGet(this, _createRestaurantIcon).call(this, category);
  }
  getElement() {
    return this.element;
  }
}
_createRestaurantIcon = new WeakMap();
_getImageSrc = new WeakMap();
const RESTAURANT_INFO_TEMPLATE = (name, distance, description) => {
  return `
    <h3 class="restaurant__name text-subtitle">${name}</h3>
    <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
    <p class="restaurant__description text-body">${description}</p>
`;
};
class RestaurantInfo {
  constructor(name, distance, description) {
    __privateAdd(this, _createRestaurantInfo, (name, distance, description) => {
      const restaurantInfo = document.createElement("div");
      restaurantInfo.classList = "restaurant__info";
      restaurantInfo.innerHTML = RESTAURANT_INFO_TEMPLATE(name, distance, description);
      return restaurantInfo;
    });
    return __privateGet(this, _createRestaurantInfo).call(this, name, distance, description);
  }
}
_createRestaurantInfo = new WeakMap();
class RestaurantItem {
  constructor(restaurant) {
    __privateAdd(this, _createRestaurantItem, (restaurant) => {
      const li = document.createElement("li");
      const icon = new RestaurantIcon(restaurant.getCategory());
      const info = new RestaurantInfo(restaurant.getName(), restaurant.getDistance(), restaurant.getDescription());
      li.classList = "restaurant";
      li.appendChild(icon);
      li.appendChild(info);
      return li;
    });
    const div = __privateGet(this, _createRestaurantItem).call(this, restaurant);
    return div;
  }
}
_createRestaurantItem = new WeakMap();
const convertStringToElement = (string) => {
  const div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
};
const BUTTON_TEMPLATE = (className, buttonText) => {
  return `<button type="button" class="button ${className} text-caption">${buttonText}</button>`;
};
class Button {
  constructor(className, buttonText) {
    __privateAdd(this, _crerateButton, (className, buttonText) => {
      return convertStringToElement(BUTTON_TEMPLATE(className, buttonText));
    });
    return __privateGet(this, _crerateButton).call(this, className, buttonText);
  }
}
_crerateButton = new WeakMap();
const INPUT_DROPDOWN_TEMPLATE = (tag, title) => {
  return `
    <label for=${tag} class="text-caption">${title}</label>
    <select name=${tag} id="${tag}" class="select-input" required>
      <option value="">선택해주세요</option>
    </select>
  `;
};
const OPTION_TEMPLATE = (value, innerValue) => {
  return `<option value="${innerValue}">${value}</option>`;
};
class InputDropDown {
  constructor(title, List) {
    __privateAdd(this, _createInputDropDown, (title, optionList) => {
      const inputDropDown = document.createElement("div");
      inputDropDown.classList.add("form-item");
      inputDropDown.classList.add("form-item--required");
      const tag = title === "카테고리" ? "category" : "distance";
      inputDropDown.innerHTML = INPUT_DROPDOWN_TEMPLATE(tag, title);
      const select = inputDropDown.querySelector("select");
      optionList.forEach(([value, innerValue]) => {
        const optionHTML = __privateGet(this, _addTemplate).call(this, value, innerValue);
        select.insertAdjacentHTML("beforeend", optionHTML);
      });
      return inputDropDown;
    });
    __privateAdd(this, _addTemplate, (value, innerValue) => {
      return OPTION_TEMPLATE(value, innerValue);
    });
    return __privateGet(this, _createInputDropDown).call(this, title, List);
  }
}
_createInputDropDown = new WeakMap();
_addTemplate = new WeakMap();
const LABEL_TEMPLATE = (type, title) => {
  return `<label for="${type} text-caption">${title}</label>`;
};
const INPUT_TEMPLATE = (tag) => {
  return `<input type="text" name="${tag}" id="${tag}" required />`;
};
const TEXTAREA_TEMPLATE = () => {
  return `<textarea name="description" id="description" cols="30" rows="5"></textarea>
    `;
};
const SPAN_TEMPLATE = (text) => {
  return `<span class="help-text text-caption">${text}</span>`;
};
class InputText {
  constructor(title) {
    __privateAdd(this, _createInputText, (title) => {
      if (title === "이름") return __privateGet(this, _handleName).call(this, title);
      if (title === "설명") return __privateGet(this, _handleDescription).call(this, title);
      if (title === "참조 링크") return __privateGet(this, _handleLink).call(this, title);
    });
    __privateAdd(this, _handleName, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.classList.add("form-item--required");
      formItem.innerHTML = `${LABEL_TEMPLATE("name", "이름")}${INPUT_TEMPLATE("name")}`;
      return formItem;
    });
    __privateAdd(this, _handleDescription, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.innerHTML = `${LABEL_TEMPLATE("description", "설명")}${TEXTAREA_TEMPLATE()}${SPAN_TEMPLATE(
        "메뉴 등 추가 정보를 입력해 주세요."
      )}`;
      return formItem;
    });
    __privateAdd(this, _handleLink, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.innerHTML = `${LABEL_TEMPLATE("link", "참고 링크")}${INPUT_TEMPLATE("link")}${SPAN_TEMPLATE(
        "매장 정보를 확인할 수 있는 링크를 입력해 주세요."
      )}`;
      return formItem;
    });
    return __privateGet(this, _createInputText).call(this, title);
  }
}
_createInputText = new WeakMap();
_handleName = new WeakMap();
_handleDescription = new WeakMap();
_handleLink = new WeakMap();
const MODAL_TEMPLATE = `<div class="modal-backdrop"></div>
          <div class="modal-container"></div>`;
class Modal {
  constructor() {
    __privateAdd(this, _modal);
    __publicField(this, "createModal", () => {
      const divModal = document.createElement("div");
      divModal.classList.add("modal");
      divModal.innerHTML = MODAL_TEMPLATE;
      DOM.APP.appendChild(divModal);
      return divModal;
    });
    __publicField(this, "addElement", (element) => {
      const divElement = __privateGet(this, _modal).querySelector(".modal-container");
      divElement.appendChild(element);
    });
    __publicField(this, "openModal", () => {
      __privateGet(this, _modal).classList.add("modal--open");
      document.body.style.overflow = "hidden";
    });
    __publicField(this, "closeModal", () => {
      __privateGet(this, _modal).classList.remove("modal--open");
      document.body.style.overflow = "";
    });
    __privateSet(this, _modal, this.createModal());
  }
}
_modal = new WeakMap();
const ERROR_MESSAGES = Object.freeze({
  NOT_SELECTED: (title) => {
    return `${title}이(가) 선택되지 않았어요.`;
  },
  IS_BLANK: "이름이 작성되지 않았어요",
  INVALID_NAME_LENGTH: "가게 이름은 1글자 이상 20글자 이하여야 해요",
  INVALID_DESCRIPTION_LENGTH: "가게 설명은 200자 이내여야 해요",
  INVALID_LINK_FORMAT: "링크는 프로토콜(https:// or http://)이 접두사로 붙어야 해요."
});
const isBlank = (name) => {
  if (name.trim() === "") return true;
};
const validateDropDown = (title, input) => {
  if (isBlank(input)) {
    throw new Error(ERROR_MESSAGES.NOT_SELECTED(title));
  }
};
const isInvalidLength = (name, length) => {
  if (name.length > length) return true;
};
const validateName = (name) => {
  if (isBlank(name)) {
    throw new Error(ERROR_MESSAGES.IS_BLANK);
  }
  if (isInvalidLength(name, 20)) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  }
};
const validateDescription = (description) => {
  if (isInvalidLength(description, 200)) {
    throw new Error(ERROR_MESSAGES.INVALID_DESCRIPTION_LENGTH);
  }
};
const hasNotPrefixProtocol = (input) => {
  if (!input.match(/https?:\/\/[\w\-\.]+/g)) return true;
};
const validateLink = (input) => {
  if (isBlank(input)) return;
  if (hasNotPrefixProtocol(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_LINK_FORMAT);
  }
};
const CATEGORY_LIST = [
  ["한식", "한식"],
  ["중식", "중식"],
  ["일식", "일식"],
  ["양식", "양식"],
  ["아시안", "아시안"],
  ["기타", "기타"]
];
const DISTANCE_LIST = [
  ["5분 내", "5"],
  ["10분 내", "10"],
  ["15분 내", "15"],
  ["20분 내", "20"],
  ["30분 내", "30"]
];
class AddRestaurantModal extends Modal {
  constructor() {
    super();
    __privateAdd(this, _cancelButton);
    __privateAdd(this, _addButton);
    __privateAdd(this, _divCategory);
    __privateAdd(this, _divName);
    __privateAdd(this, _divDistance);
    __privateAdd(this, _divDescription);
    __privateAdd(this, _divLink);
    __privateAdd(this, _modalForm);
    __privateAdd(this, _init, () => {
      __privateSet(this, _cancelButton, new Button("button--secondary", "취소하기"));
      __privateSet(this, _addButton, new Button("button--primary", "추가하기"));
      __privateSet(this, _divCategory, new InputDropDown("카테고리", CATEGORY_LIST));
      __privateSet(this, _divName, new InputText("이름"));
      __privateSet(this, _divDistance, new InputDropDown("거리(도보 이동 시간)", DISTANCE_LIST));
      __privateSet(this, _divDescription, new InputText("설명"));
      __privateSet(this, _divLink, new InputText("참조 링크"));
      __privateSet(this, _modalForm, document.createElement("form"));
    });
    __privateAdd(this, _createButton, () => {
      const divButton = document.createElement("div");
      divButton.classList.add("button-container");
      divButton.appendChild(__privateGet(this, _cancelButton));
      divButton.appendChild(__privateGet(this, _addButton));
      return divButton;
    });
    __privateAdd(this, _appendChildToModalForm, () => {
      __privateGet(this, _modalForm).appendChild(__privateGet(this, _divCategory));
      __privateGet(this, _modalForm).appendChild(__privateGet(this, _divName));
      __privateGet(this, _modalForm).appendChild(__privateGet(this, _divDistance));
      __privateGet(this, _modalForm).appendChild(__privateGet(this, _divDescription));
      __privateGet(this, _modalForm).appendChild(__privateGet(this, _divLink));
    });
    __privateAdd(this, _createAddModal, () => {
      const modalTitle = document.createElement("h2");
      modalTitle.classList.add("modal-title");
      modalTitle.classList.add("text-title");
      modalTitle.innerText = "새로운 음식점";
      this.addElement(modalTitle);
      __privateGet(this, _appendChildToModalForm).call(this);
      this.addElement(__privateGet(this, _modalForm));
      const divButton = __privateGet(this, _createButton).call(this);
      this.addElement(divButton);
    });
    __privateAdd(this, _addHandler, () => {
      const testData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
      const newRestaurant = new Restaurant(testData.name, testData.distance, testData.description, testData.category);
      const newRestaurantItem = new RestaurantItem(newRestaurant);
      DOM.RESTAURANT_LIST.appendChild(newRestaurantItem);
    });
    __privateAdd(this, _validateInputs, () => {
      const testData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
      try {
        validateDropDown("카테고리", testData.category);
        validateName(testData.name);
        validateDropDown("거리", testData.distance);
        validateDescription(testData.description);
        validateLink(testData.link);
        return true;
      } catch (error) {
        alert(error.message);
      }
    });
    __privateAdd(this, _bindEvent2, () => {
      __privateGet(this, _addButton).addEventListener("click", (event) => {
        event.preventDefault();
        if (__privateGet(this, _validateInputs).call(this)) {
          __privateGet(this, _addHandler).call(this);
          this.closeModal();
        }
      });
      __privateGet(this, _cancelButton).addEventListener("click", () => {
        this.closeModal();
      });
      document.querySelector(".modal-backdrop").addEventListener("click", () => {
        this.closeModal();
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          this.closeModal();
        }
      });
    });
    __privateGet(this, _init).call(this);
    __privateGet(this, _bindEvent2).call(this);
    __privateGet(this, _createAddModal).call(this);
    return this;
  }
}
_cancelButton = new WeakMap();
_addButton = new WeakMap();
_divCategory = new WeakMap();
_divName = new WeakMap();
_divDistance = new WeakMap();
_divDescription = new WeakMap();
_divLink = new WeakMap();
_modalForm = new WeakMap();
_init = new WeakMap();
_createButton = new WeakMap();
_appendChildToModalForm = new WeakMap();
_createAddModal = new WeakMap();
_addHandler = new WeakMap();
_validateInputs = new WeakMap();
_bindEvent2 = new WeakMap();
const addRestaurantModal = new AddRestaurantModal();
new Header(addRestaurantModal);
const createRestaurantList = (restaurantList) => {
  restaurantList.forEach((restaurant) => {
    const restaurantItem = new RestaurantItem(restaurant);
    DOM.RESTAURANT_LIST.appendChild(restaurantItem);
  });
};
createRestaurantList(RestaurantList);
