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
var _createHeader, _bindEvent, _createRestaurantIcon, _getImageSrc, _createRestaurantInfo, _createRestaurantItem, _crerateButton, _createInputDropDown, _addTemplate, _createInputText, _handleName, _handleDescription, _handleLink, _modal, _name, _distance, _description, _category, _link, _cancelButton, _addButton, _divCategory, _divName, _divDistance, _divDescription, _divLink, _modalForm, _init, _createButton, _appendChildToModalForm, _createAddModal, _addNewRestaurant, _validateInputs, _bindAddButtonEvent, _bindCancleButtonEvent, _bindModalBackDropEvent, _bindESCEvent, _bindEvent2, _createRestaurantList;
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
const HEADER_TEMPLATE = `
  <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
  <button type="button" class="gnb__button" aria-label="음식점 추가">
    <img src="https://h0ngju.github.io/javascript-lunch/public/assets/add-button.png" alt="음식점 추가">
  </button>
`;
class Header {
  constructor(modalClickHandler2) {
    __privateAdd(this, _createHeader, () => {
      const header = document.createElement("header");
      header.classList = "gnb";
      header.innerHTML = HEADER_TEMPLATE;
      DOM.APP.prepend(header);
    });
    __privateAdd(this, _bindEvent, (modalClickHandler2) => {
      const addButton = document.querySelector(".gnb__button");
      addButton.addEventListener("click", () => {
        modalClickHandler2();
      });
    });
    __privateGet(this, _createHeader).call(this);
    __privateGet(this, _bindEvent).call(this, modalClickHandler2);
  }
  // 헤더의 역할
  // 1. 해더를 생성한다.
  // 2. 클릭 이벤트 -> 모달을 띄운다.
  // ?????????????????
  // 모달
  // 1. 모달을 생성한다.
  // 2. 모달 contents를 그린다.
  // 3. 받은 입력값에 대하여 list에 추가한다.
  //    -> 도메인로직으로 분리
  //    -> (1단계) DOM에 추가 -> 지금은 UI 추가니까 도메인 분리 x
  //    -> (2단계) Local stgroage에 추가 => 함수 분리
  //
  // 4. 모달 클릭 이벤트(오픈, 닫기, 추가하기) 관리
  //    -> 오픈 -> classList 추가
  //    -> 닫기 ->           삭제
  //    -> 추가 -> 3의 도메인 로직 호출
  // 클릭 이벤트를 분리한다면
  // 모달
  // 요소 생성
  // 값 추가
  // validation
  // 굳이 객체여야 ?
}
_createHeader = new WeakMap();
_bindEvent = new WeakMap();
const CATEGORY = Object.freeze({
  korean: "한식",
  chinese: "중식",
  japanese: "일식",
  western: "양식",
  asian: "아시안",
  etc: "기타"
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
      const url = `https://h0ngju.github.io/javascript-lunch/public/assets/category-`;
      const key = CATEGORY[category] ? category : "etc";
      return `${url}${key}.png`;
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
  constructor(title, option) {
    __privateAdd(this, _createInputDropDown, (title, option) => {
      const inputDropDown = document.createElement("div");
      inputDropDown.classList.add("form-item");
      inputDropDown.classList.add("form-item--required");
      const tag = title === "카테고리" ? "category" : "distance";
      inputDropDown.innerHTML = INPUT_DROPDOWN_TEMPLATE(tag, title);
      const select = inputDropDown.querySelector("select");
      Object.entries(option).forEach(([key, value]) => {
        const optionHTML = __privateGet(this, _addTemplate).call(this, value, key);
        select.insertAdjacentHTML("beforeend", optionHTML);
      });
      return inputDropDown;
    });
    __privateAdd(this, _addTemplate, (value, innerValue) => {
      return OPTION_TEMPLATE(value, innerValue);
    });
    return __privateGet(this, _createInputDropDown).call(this, title, option);
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
      console.log(document.getElementById("name").value, "sdsffsff");
    });
    __publicField(this, "closeModal", () => {
      __privateGet(this, _modal).classList.remove("modal--open");
      document.body.style.overflow = "";
    });
    __privateSet(this, _modal, this.createModal());
  }
}
_modal = new WeakMap();
const DISTANCE = Object.freeze({
  5: "5분 내",
  10: "10분 내",
  15: "15분 내",
  20: "20분 내",
  30: "30분 내"
});
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
const isInvalidLength = (name, length) => {
  if (name.length > length) return true;
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
  if (!isBlank(input) && hasNotPrefixProtocol(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_LINK_FORMAT);
  }
};
const validateName = (name) => {
  if (isBlank(name)) {
    throw new Error(ERROR_MESSAGES.IS_BLANK);
  }
  if (isInvalidLength(name, 20)) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  }
};
class Restaurant {
  constructor(name, distance, description, category, link) {
    __privateAdd(this, _name);
    __privateAdd(this, _distance);
    __privateAdd(this, _description);
    __privateAdd(this, _category);
    __privateAdd(this, _link);
    validateName(name);
    validateDescription(description);
    validateLink(link);
    __privateSet(this, _name, name);
    __privateSet(this, _distance, distance);
    __privateSet(this, _description, description);
    __privateSet(this, _category, category);
    __privateSet(this, _link, link);
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
  getLink() {
    return String(__privateGet(this, _link));
  }
}
_name = new WeakMap();
_distance = new WeakMap();
_description = new WeakMap();
_category = new WeakMap();
_link = new WeakMap();
const validateDropDown = (title, input) => {
  if (isBlank(input)) {
    throw new Error(ERROR_MESSAGES.NOT_SELECTED(title));
  }
};
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
      __privateSet(this, _divCategory, new InputDropDown("카테고리", CATEGORY));
      __privateSet(this, _divName, new InputText("이름"));
      __privateSet(this, _divDistance, new InputDropDown("거리(도보 이동 시간)", DISTANCE));
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
    __privateAdd(this, _addNewRestaurant, () => {
      const testData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
      const newRestaurant = new Restaurant(
        testData.name,
        testData.distance,
        testData.description,
        testData.category,
        testData.link
      );
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
        return false;
      }
    });
    __privateAdd(this, _bindAddButtonEvent, () => {
      __privateGet(this, _addButton).addEventListener("click", (event) => {
        event.preventDefault();
        if (__privateGet(this, _validateInputs).call(this)) {
          __privateGet(this, _addNewRestaurant).call(this);
          this.closeModal();
          __privateGet(this, _init).call(this);
        }
      });
    });
    __privateAdd(this, _bindCancleButtonEvent, () => {
      __privateGet(this, _cancelButton).addEventListener("click", () => {
        this.closeModal();
      });
    });
    __privateAdd(this, _bindModalBackDropEvent, () => {
      document.querySelector(".modal-backdrop").addEventListener("click", () => {
        this.closeModal();
      });
    });
    __privateAdd(this, _bindESCEvent, () => {
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          this.closeModal();
        }
      });
    });
    __privateAdd(this, _bindEvent2, () => {
      __privateGet(this, _bindAddButtonEvent).call(this);
      __privateGet(this, _bindCancleButtonEvent).call(this);
      __privateGet(this, _bindESCEvent).call(this);
      __privateGet(this, _bindModalBackDropEvent).call(this);
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
_addNewRestaurant = new WeakMap();
_validateInputs = new WeakMap();
_bindAddButtonEvent = new WeakMap();
_bindCancleButtonEvent = new WeakMap();
_bindModalBackDropEvent = new WeakMap();
_bindESCEvent = new WeakMap();
_bindEvent2 = new WeakMap();
const restaurantDatas = [
  new Restaurant(
    "피양콩할마니",
    "10",
    "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다.",
    "korean",
    ""
  ),
  new Restaurant(
    "친친",
    "5",
    "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다",
    "chinese",
    ""
  ),
  new Restaurant(
    "잇쇼우",
    "10",
    "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다",
    "japanese",
    ""
  ),
  new Restaurant("이태리키친", "20", "늘 변화를 추구하는 이태리키친입니다.", "western", ""),
  new Restaurant("호아빈 삼성점", "15", "푸짐한 양에 국물이 일품인 쌀국수", "asian", ""),
  new Restaurant("도스타코스 선릉점", "5", "멕시칸 캐주얼 그릴", "etc", "")
];
class RestaurantList {
  constructor() {
    __privateAdd(this, _createRestaurantList, (restaurantList) => {
      restaurantList.forEach((restaurant) => {
        const restaurantItem = new RestaurantItem(restaurant);
        DOM.RESTAURANT_LIST.appendChild(restaurantItem);
      });
    });
    __privateGet(this, _createRestaurantList).call(this, restaurantDatas);
  }
}
_createRestaurantList = new WeakMap();
const addRestaurantModal = new AddRestaurantModal();
const modalClickHandler = () => {
  addRestaurantModal.openModal();
};
new Header(modalClickHandler);
new RestaurantList();
