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
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _appContainer, _Header_instances, createHeader_fn, _bindEvent, _createRestaurantIcon, _getImageSrc, _createRestaurantInfo, _star, _isLiked, _onRestaurantUpdate, _Star_instances, createStar_fn, toggle_fn, _bindEvent2, _restaurantElement, _onRestaurantUpdate2, _restaurant, _onClickItem, _createRestaurantItem, _bindEvent3, _name, _distance, _description, _category, _link, _isLiked2, _likeHeaderContainer, _leftTitle, _rightTitle, _currentHeader, _LikeHeader_instances, createLikeHeader_fn, _bindEvent4, _restaurantList, _STORAGE_KEY, _restaurantListContainer, _onRestaurantUpdate3, _detailModal, _restaurantData, _restaurants, _currentCategory, _currentSorting, _currentHeader2, _onClickItem2, _RestaurantList_instances, createRestaurantList_fn, renderRestaurantList_fn, _crerateButton, _inputContainer, _inputComponent, _Input_instances, createInput_fn, _createFormItemLabel, _select, _option, _InputDropDown_instances, createInputDropDown_fn, _appContainer2, _modal, _input, _textarea, _cancelButton, _addButton, _divCategory, _divName, _divDistance, _divDescription, _divLink, _modalForm, _onClickAddButton, _AddRestaurantModal_instances, init_fn, resetForm_fn, createButton_fn, appendChildToModalForm_fn, createAddModal_fn, addNewRestaurant_fn, validateInputs_fn, _bindAddButtonEvent, _bindCancleButtonEvent, _bindModalBackDropEvent, _bindESCEvent, _bindEvent5, _cancelButton2, _deleteButton, _star2, _currentRestaurant, _onClickDeleteButton, _DetailModal_instances, init_fn2, createAddModal_fn2, createButton_fn2, setRestaurantStyle_fn, addRestaurantLink_fn, _bindDeleteButtonEvent, _bindCancleButtonEvent2, _bindModalBackDropEvent2, _bindESCEvent2, clearModalContent_fn, _bindEvent6, _categoryFilter, _sortingFilter, _currentCategory2, _currentSorting2, _currentHeader3, _restaurantList2, _$likeHeader, _App_instances, init_fn3, createAppContainer_fn, createFilter_fn, _bindCategoryEvent, _bindSortingEvent, _bindLikeHeaderEvent, _bindEvent7, _modalClickHandler, handleRestaurantUpdate_fn, _handleDeleteRestaurant, _handleAddRestaurant, _handleDetailModal, initAppUI_fn;
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
const HEADER_TEMPLATE = `
  <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
  <button type="button" class="gnb__button" aria-label="음식점 추가">
    <img src="https://h0ngju.github.io/javascript-lunch/assets/add-button.png" alt="음식점 추가">
  </button>
`;
class Header {
  constructor({ appContainer, onClickIcon }) {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _appContainer);
    __privateAdd(this, _bindEvent, (onClickIcon) => {
      const addButton = document.querySelector(".gnb__button");
      if (onClickIcon) addButton.addEventListener("click", onClickIcon);
    });
    __privateSet(this, _appContainer, appContainer);
    __privateMethod(this, _Header_instances, createHeader_fn).call(this);
    __privateGet(this, _bindEvent).call(this, onClickIcon);
  }
}
_appContainer = new WeakMap();
_Header_instances = new WeakSet();
createHeader_fn = function() {
  const header = document.createElement("header");
  header.classList = "gnb";
  header.innerHTML = HEADER_TEMPLATE;
  __privateGet(this, _appContainer).prepend(header);
};
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
      const url = `https://h0ngju.github.io/javascript-lunch/assets/category-`;
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
class Star {
  constructor(restaurant, onRestaurantUpdate) {
    __privateAdd(this, _Star_instances);
    __privateAdd(this, _star);
    __privateAdd(this, _isLiked);
    __privateAdd(this, _onRestaurantUpdate);
    __publicField(this, "restaurant");
    __privateAdd(this, _bindEvent2, () => {
      __privateGet(this, _star).addEventListener("click", () => {
        __privateSet(this, _isLiked, !__privateGet(this, _isLiked));
        this.restaurant.setIsLiked(__privateGet(this, _isLiked));
        __privateMethod(this, _Star_instances, toggle_fn).call(this, __privateGet(this, _isLiked));
        if (__privateGet(this, _onRestaurantUpdate)) {
          __privateGet(this, _onRestaurantUpdate).call(this);
        }
      });
    });
    this.restaurant = restaurant;
    __privateSet(this, _onRestaurantUpdate, onRestaurantUpdate);
    __privateSet(this, _isLiked, restaurant.getIsLiked());
    __privateMethod(this, _Star_instances, createStar_fn).call(this);
    __privateGet(this, _bindEvent2).call(this);
  }
  getElement() {
    return __privateGet(this, _star);
  }
}
_star = new WeakMap();
_isLiked = new WeakMap();
_onRestaurantUpdate = new WeakMap();
_Star_instances = new WeakSet();
createStar_fn = function() {
  const star = document.createElement("button");
  star.classList.add("star-icon");
  __privateGet(this, _isLiked) ? star.classList.add("like") : star.classList.add("unlike");
  __privateSet(this, _star, star);
};
toggle_fn = function(isLiked) {
  if (isLiked) {
    __privateGet(this, _star).classList.remove("unlike");
    __privateGet(this, _star).classList.add("like");
  } else {
    __privateGet(this, _star).classList.remove("like");
    __privateGet(this, _star).classList.add("unlike");
  }
};
_bindEvent2 = new WeakMap();
const _RestaurantItem = class _RestaurantItem {
  constructor(restaurant, onRestaurantUpdate, onClickItem) {
    __privateAdd(this, _restaurantElement);
    __privateAdd(this, _onRestaurantUpdate2);
    __privateAdd(this, _restaurant);
    __privateAdd(this, _onClickItem);
    __privateAdd(this, _createRestaurantItem, (restaurant) => {
      const li = document.createElement("li");
      const icon = new RestaurantIcon(restaurant.getCategory());
      const star = new Star(restaurant, __privateGet(this, _onRestaurantUpdate2)).getElement();
      const info = new RestaurantInfo(restaurant.getName(), restaurant.getDistance(), restaurant.getDescription());
      li.classList = "restaurant";
      li.appendChild(icon);
      li.appendChild(info);
      li.appendChild(star);
      __privateSet(this, _restaurantElement, li);
    });
    __privateAdd(this, _bindEvent3, (element) => {
      element.addEventListener("click", (event) => {
        if (event.target.closest(".star-icon")) {
          return;
        }
        const clonedRestaurant = new _RestaurantItem(
          __privateGet(this, _restaurant),
          __privateGet(this, _onRestaurantUpdate2),
          __privateGet(this, _onClickItem)
        ).getElement();
        __privateGet(this, _onClickItem).call(this, clonedRestaurant, __privateGet(this, _restaurant));
      });
    });
    __privateSet(this, _onRestaurantUpdate2, onRestaurantUpdate);
    __privateSet(this, _onClickItem, onClickItem);
    __privateSet(this, _restaurant, restaurant);
    __privateGet(this, _createRestaurantItem).call(this, restaurant);
    __privateGet(this, _bindEvent3).call(this, __privateGet(this, _restaurantElement));
  }
  getElement() {
    return __privateGet(this, _restaurantElement);
  }
};
_restaurantElement = new WeakMap();
_onRestaurantUpdate2 = new WeakMap();
_restaurant = new WeakMap();
_onClickItem = new WeakMap();
_createRestaurantItem = new WeakMap();
_bindEvent3 = new WeakMap();
let RestaurantItem = _RestaurantItem;
const SIZE = Object.freeze({
  MIN_LENGTH_OF_NAME: 1,
  MAX_LENGTH_OF_NAME: 20,
  MAX_LENGTH_OF_DESCRIPTION: 200
});
const ERROR_MESSAGES = Object.freeze({
  NOT_SELECTED: (title) => {
    return `${title}이(가) 선택되지 않았어요.`;
  },
  IS_BLANK: "이름이 작성되지 않았어요",
  INVALID_NAME_LENGTH: `가게 이름은 ${SIZE.MIN_LENGTH_OF_NAME}글자 이상 ${SIZE.MAX_LENGTH_OF_NAME}글자 이하여야 해요`,
  INVALID_DESCRIPTION_LENGTH: `가게 설명은 ${SIZE.MAX_LENGTH_OF_DESCRIPTION}자 이내여야 해요`,
  INVALID_LINK_FORMAT: "링크는 프로토콜(https:// or http://)이 접두사로 붙어야 해요."
});
function isBlank(name) {
  if (name.trim() === "") return true;
}
function isInvalidLength(name, length) {
  if (name.length > length) return true;
}
function validateDescription(description) {
  if (description && isInvalidLength(description, SIZE.MAX_LENGTH_OF_DESCRIPTION)) {
    throw new Error(ERROR_MESSAGES.INVALID_DESCRIPTION_LENGTH);
  }
}
function hasNotPrefixProtocol(input) {
  return !input.match(/https?:\/\/[\w\-\.]+/g) ? true : false;
}
function validateLink(input) {
  if (input && !isBlank(input) && hasNotPrefixProtocol(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_LINK_FORMAT);
  }
}
function validateName(name) {
  if (isBlank(name)) {
    throw new Error(ERROR_MESSAGES.IS_BLANK);
  }
  if (isInvalidLength(name, SIZE.MAX_LENGTH_OF_NAME)) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  }
}
class Restaurant {
  constructor({ name, distance, description = "", category, link = "", isLiked }) {
    __privateAdd(this, _name);
    __privateAdd(this, _distance);
    __privateAdd(this, _description);
    __privateAdd(this, _category);
    __privateAdd(this, _link);
    __privateAdd(this, _isLiked2);
    validateName(name);
    validateDescription(description);
    validateLink(link);
    __privateSet(this, _name, name);
    __privateSet(this, _distance, distance);
    __privateSet(this, _description, description);
    __privateSet(this, _category, category);
    __privateSet(this, _link, link);
    __privateSet(this, _isLiked2, isLiked);
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
  getIsLiked() {
    return __privateGet(this, _isLiked2);
  }
  setIsLiked(isLiked) {
    __privateSet(this, _isLiked2, isLiked);
  }
}
_name = new WeakMap();
_distance = new WeakMap();
_description = new WeakMap();
_category = new WeakMap();
_link = new WeakMap();
_isLiked2 = new WeakMap();
const DummyData = [
  new Restaurant({
    name: "피양콩할마니",
    distance: 10,
    description: "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다.",
    category: "korean",
    isLiked: true
  }),
  new Restaurant({
    name: "친친",
    distance: 5,
    description: "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다",
    category: "chinese",
    isLiked: true
  }),
  new Restaurant({
    name: "잇쇼우",
    distance: 10,
    description: "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다",
    category: "japanese",
    isLiked: false
  }),
  new Restaurant({
    name: "이태리키친",
    distance: 20,
    description: "늘 변화를 추구하는 이태리키친입니다.",
    category: "western",
    isLiked: false
  }),
  new Restaurant({
    name: "호아빈 삼성점",
    distance: 15,
    description: "푸짐한 양에 국물이 일품인 쌀국수",
    category: "asian",
    isLiked: true
  }),
  new Restaurant({
    name: "나아빈 삼성점",
    distance: 30,
    category: "asian",
    isLiked: false
  }),
  new Restaurant({
    name: "가아빈 삼성점",
    distance: 10,
    description: "푸짐한 양에 국물이 일품인 쌀국수",
    category: "asian",
    isLiked: true
  }),
  new Restaurant({
    name: "도스타코스 선릉점",
    distance: 5,
    description: "멕시칸 캐주얼 그릴",
    category: "etc",
    link: "https://g.co/kgs/ueyGBPy",
    isLiked: true
  })
];
const LIKE_HEADER_STATE = Object.freeze({
  ALL: "ALL",
  LIKE: "LIKE"
});
const LIKE_HEADER_TITLE = Object.freeze({
  [LIKE_HEADER_STATE.ALL]: "모든 음식점",
  [LIKE_HEADER_STATE.LIKE]: "자주 가는 음식점"
});
class LikeHeader {
  constructor(likeHeaderContainer) {
    __privateAdd(this, _LikeHeader_instances);
    __privateAdd(this, _likeHeaderContainer);
    __privateAdd(this, _leftTitle);
    __privateAdd(this, _rightTitle);
    __privateAdd(this, _currentHeader);
    __privateAdd(this, _bindEvent4, () => {
      __privateGet(this, _leftTitle).addEventListener("click", () => {
        __privateGet(this, _leftTitle).classList.add("selected");
        __privateGet(this, _rightTitle).classList.remove("selected");
        __privateSet(this, _currentHeader, LIKE_HEADER_STATE.ALL);
      });
      __privateGet(this, _rightTitle).addEventListener("click", () => {
        __privateGet(this, _leftTitle).classList.remove("selected");
        __privateGet(this, _rightTitle).classList.add("selected");
        __privateSet(this, _currentHeader, LIKE_HEADER_STATE.LIKE);
      });
    });
    __privateSet(this, _likeHeaderContainer, likeHeaderContainer);
    __privateSet(this, _currentHeader, LIKE_HEADER_STATE.ALL);
    __privateMethod(this, _LikeHeader_instances, createLikeHeader_fn).call(this);
    __privateGet(this, _bindEvent4).call(this);
  }
  getElement() {
    return __privateGet(this, _likeHeaderContainer);
  }
  getCurrentHeader() {
    return __privateGet(this, _currentHeader);
  }
}
_likeHeaderContainer = new WeakMap();
_leftTitle = new WeakMap();
_rightTitle = new WeakMap();
_currentHeader = new WeakMap();
_LikeHeader_instances = new WeakSet();
createLikeHeader_fn = function() {
  const leftTitleDiv = document.createElement("button");
  leftTitleDiv.classList.add("selected");
  leftTitleDiv.classList.add("all-restaurants");
  const rightTitleDiv = document.createElement("button");
  rightTitleDiv.classList.add("like-restaurants");
  leftTitleDiv.innerText = LIKE_HEADER_TITLE[LIKE_HEADER_STATE.ALL];
  rightTitleDiv.innerText = LIKE_HEADER_TITLE[LIKE_HEADER_STATE.LIKE];
  __privateSet(this, _leftTitle, leftTitleDiv);
  __privateSet(this, _rightTitle, rightTitleDiv);
  __privateGet(this, _likeHeaderContainer).appendChild(leftTitleDiv);
  __privateGet(this, _likeHeaderContainer).appendChild(rightTitleDiv);
};
_bindEvent4 = new WeakMap();
class Restaurants {
  constructor(initialRestaurants = []) {
    __privateAdd(this, _restaurantList);
    __privateSet(this, _restaurantList, initialRestaurants);
  }
  getAll() {
    return __privateGet(this, _restaurantList);
  }
  add(restaurant) {
    __privateGet(this, _restaurantList).push(restaurant);
  }
  delete(restaurantName) {
    __privateSet(this, _restaurantList, __privateGet(this, _restaurantList).filter((restaurant) => restaurant.getName() !== restaurantName));
  }
  updateIsLiked(restaurantName, isLiked) {
    const restaurant = __privateGet(this, _restaurantList).find((restaurant2) => restaurant2.getName() === restaurantName);
    if (restaurant) {
      restaurant.setIsLiked(isLiked);
    }
  }
  filterAndSort(options = {}) {
    const { category, sorting, header } = options;
    let filteredList = [...__privateGet(this, _restaurantList)];
    filteredList = filteredList.filter((restaurant) => {
      if (category && restaurant.getCategory() !== category) return false;
      if (header === LIKE_HEADER_STATE.LIKE && restaurant.getIsLiked() !== true) return false;
      return true;
    });
    if (sorting === "name") filteredList = filteredList.sort((a, b) => a.getName().localeCompare(b.getName()));
    if (sorting === "distance")
      filteredList = filteredList.sort((a, b) => Number(a.getDistance()) - Number(b.getDistance()));
    return filteredList;
  }
}
_restaurantList = new WeakMap();
const RESTAURANT_STORAGE_ERROR = Object.freeze({
  FAILED_LOAD_FROM_LOCAL_STORAGE: "음식점 리스트 데이터를 불러오는데 실패하였습니다.",
  FAILED_TO_SAVE_RESTAURANT: "음식점을 추가에 실패하였습니다.",
  FAILED_TO_DELET_RESTAURANT: "음식점을 삭제하는데 실패하였습니다.",
  FAILED_TO_UPDATE_IS_LIKE: "음식점의 즐겨찾기를 업데이트할 수 없습니다."
});
class RestaurantStorage {
  static getRestaurants() {
    const storedData = localStorage.getItem(__privateGet(this, _STORAGE_KEY));
    if (!storedData) {
      const restaurants = new Restaurants(DummyData);
      this.saveRestaurants(restaurants);
      return restaurants;
    }
    try {
      const parsedData = JSON.parse(storedData);
      const restaurantList = parsedData.map(
        (item) => new Restaurant({
          name: item.name,
          distance: Number(item.distance),
          description: item.description,
          category: item.category,
          link: item.link,
          isLiked: item.isLiked
        })
      );
      return new Restaurants(restaurantList);
    } catch (error) {
      throw new Error(RESTAURANT_STORAGE_ERROR.FAILED_LOAD_FROM_LOCAL_STORAGE);
    }
  }
  static saveRestaurants(restaurants) {
    const restaurantArray = restaurants.getAll();
    const serializableData = restaurantArray.map((restaurant) => ({
      name: restaurant.getName(),
      distance: restaurant.getDistance(),
      description: restaurant.getDescription(),
      category: restaurant.getCategory(),
      link: restaurant.getLink(),
      isLiked: restaurant.getIsLiked()
    }));
    localStorage.setItem(__privateGet(this, _STORAGE_KEY), JSON.stringify(serializableData));
  }
  static addRestaurant(restaurant) {
    const restaurants = this.getRestaurants();
    if (restaurants instanceof Restaurants) {
      restaurants.add(restaurant);
      this.saveRestaurants(restaurants);
      return restaurants;
    } else {
      throw new Error(RESTAURANT_STORAGE_ERROR.FAILED_TO_SAVE_RESTAURANT);
    }
  }
  static deleteRestaurant(restaurantName) {
    const restaurants = this.getRestaurants();
    if (restaurants instanceof Restaurants) {
      restaurants.delete(restaurantName);
      this.saveRestaurants(restaurants);
      return restaurants;
    } else {
      throw new Error(RESTAURANT_STORAGE_ERROR.FAILED_TO_DELET_RESTAURANT);
    }
  }
  static updateRestaurantIsLiked(restaurantName, isLiked) {
    const restaurants = this.getRestaurants();
    if (restaurants instanceof Restaurants) {
      restaurants.updateIsLiked(restaurantName, isLiked);
      this.saveRestaurants(restaurants);
      return restaurants;
    } else {
      throw new Error(RESTAURANT_STORAGE_ERROR.FAILED_TO_UPDATE_IS_LIKE);
    }
  }
}
_STORAGE_KEY = new WeakMap();
__privateAdd(RestaurantStorage, _STORAGE_KEY, "restaurants");
class RestaurantList {
  constructor(restaurantListContainer, onRestaurantUpdate, onClickItem) {
    __privateAdd(this, _RestaurantList_instances);
    __privateAdd(this, _restaurantListContainer);
    // 레스토랑 리스트 컨테이너
    __privateAdd(this, _onRestaurantUpdate3);
    // 레스토랑 리스트 리로드 함수
    __privateAdd(this, _detailModal);
    // 레스토랑 상세정보 모달
    __privateAdd(this, _restaurantData);
    // localStorage 레스토랑 데이터
    __privateAdd(this, _restaurants);
    __privateAdd(this, _currentCategory);
    __privateAdd(this, _currentSorting);
    __privateAdd(this, _currentHeader2);
    __privateAdd(this, _onClickItem2);
    __privateSet(this, _restaurantListContainer, restaurantListContainer);
    __privateSet(this, _onRestaurantUpdate3, onRestaurantUpdate);
    __privateSet(this, _onClickItem2, onClickItem);
    __privateSet(this, _restaurants, RestaurantStorage.getRestaurants());
    __privateMethod(this, _RestaurantList_instances, renderRestaurantList_fn).call(this);
  }
  sortRestaurantList(category, sorting, currentHeader) {
    __privateSet(this, _currentCategory, category);
    __privateSet(this, _currentSorting, sorting);
    __privateSet(this, _currentHeader2, currentHeader);
    __privateMethod(this, _RestaurantList_instances, renderRestaurantList_fn).call(this);
  }
  addRestaurant(restaurant) {
    __privateSet(this, _restaurantData, RestaurantStorage.addRestaurant(restaurant));
    __privateSet(this, _restaurants, __privateGet(this, _restaurantData));
    __privateMethod(this, _RestaurantList_instances, renderRestaurantList_fn).call(this);
  }
  deleteRestaurant(restaurantName) {
    __privateSet(this, _restaurantData, RestaurantStorage.deleteRestaurant(restaurantName));
    __privateSet(this, _restaurants, __privateGet(this, _restaurantData));
    __privateMethod(this, _RestaurantList_instances, renderRestaurantList_fn).call(this);
  }
  updateRestaurantIsLiked(restaurantName, isLiked) {
    __privateSet(this, _restaurantData, RestaurantStorage.updateRestaurantIsLiked(restaurantName, isLiked));
    __privateMethod(this, _RestaurantList_instances, renderRestaurantList_fn).call(this);
  }
  getRestaurantData() {
    return __privateGet(this, _restaurants).getAll();
  }
}
_restaurantListContainer = new WeakMap();
_onRestaurantUpdate3 = new WeakMap();
_detailModal = new WeakMap();
_restaurantData = new WeakMap();
_restaurants = new WeakMap();
_currentCategory = new WeakMap();
_currentSorting = new WeakMap();
_currentHeader2 = new WeakMap();
_onClickItem2 = new WeakMap();
_RestaurantList_instances = new WeakSet();
createRestaurantList_fn = function(restaurantList) {
  __privateGet(this, _restaurantListContainer).innerHTML = "";
  restaurantList.forEach((restaurant) => {
    const restaurantItem = new RestaurantItem(restaurant, __privateGet(this, _onRestaurantUpdate3), __privateGet(this, _onClickItem2)).getElement();
    __privateGet(this, _restaurantListContainer).appendChild(restaurantItem);
  });
};
renderRestaurantList_fn = function() {
  const restaurantList = __privateGet(this, _restaurants).filterAndSort({
    category: __privateGet(this, _currentCategory),
    sorting: __privateGet(this, _currentSorting),
    header: __privateGet(this, _currentHeader2)
  });
  __privateMethod(this, _RestaurantList_instances, createRestaurantList_fn).call(this, restaurantList);
};
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
class Input {
  constructor({ name, title, required = false, spanText = "", inputComponent }) {
    __privateAdd(this, _Input_instances);
    __privateAdd(this, _inputContainer);
    __privateAdd(this, _inputComponent);
    __privateAdd(this, _createFormItemLabel, (type, title) => {
      const label = document.createElement("label");
      label.setAttribute("for", type);
      label.classList.add("text-caption");
      label.textContent = title;
      return label;
    });
    __privateSet(this, _inputComponent, inputComponent);
    __privateSet(this, _inputContainer, __privateMethod(this, _Input_instances, createInput_fn).call(this, name, title, required, spanText, inputComponent));
  }
  reset() {
    __privateGet(this, _inputComponent).reset();
  }
  getElement() {
    return __privateGet(this, _inputContainer);
  }
}
_inputContainer = new WeakMap();
_inputComponent = new WeakMap();
_Input_instances = new WeakSet();
createInput_fn = function(name, title, required, spanText, inputComponent) {
  const formItem = document.createElement("div");
  formItem.classList.add("form-item");
  if (required) formItem.classList.add("form-item--required");
  const label = __privateGet(this, _createFormItemLabel).call(this, name, title);
  formItem.appendChild(label);
  formItem.appendChild(inputComponent.getElement());
  if (spanText) {
    const span = document.createElement("span");
    span.classList.add("help-text", "text-caption");
    span.textContent = spanText;
    formItem.appendChild(span);
  }
  return formItem;
};
_createFormItemLabel = new WeakMap();
const OPTION_TEMPLATE = (value, innerValue) => {
  return `<option value="${innerValue}">${value}</option>`;
};
class InputDropDown {
  constructor({ name, id, required = false, option, optionDefault }) {
    __privateAdd(this, _InputDropDown_instances);
    __privateAdd(this, _select);
    __privateAdd(this, _option);
    __privateSet(this, _option, option);
    __privateSet(this, _select, __privateMethod(this, _InputDropDown_instances, createInputDropDown_fn).call(this, name, id, required, optionDefault));
  }
  reset() {
    __privateGet(this, _select).selectedIndex = 0;
  }
  getElement() {
    return __privateGet(this, _select);
  }
}
_select = new WeakMap();
_option = new WeakMap();
_InputDropDown_instances = new WeakSet();
createInputDropDown_fn = function(name, id, required, optionDefault) {
  const select = document.createElement("select");
  select.setAttribute("name", name);
  select.setAttribute("id", id);
  if (required) select.required = true;
  if (optionDefault != null) select.insertAdjacentHTML("beforeend", OPTION_TEMPLATE(optionDefault, ""));
  Object.entries(__privateGet(this, _option)).forEach(([key, value]) => {
    select.insertAdjacentHTML("beforeend", OPTION_TEMPLATE(value, key));
  });
  return select;
};
const MODAL_TEMPLATE = `<div class="modal-backdrop"></div>
          <div class="modal-container"></div>`;
class Modal {
  constructor(appContainer) {
    __privateAdd(this, _appContainer2);
    __privateAdd(this, _modal);
    __privateSet(this, _appContainer2, appContainer);
    this.createModal();
  }
  createModal() {
    const divModal = document.createElement("div");
    divModal.classList.add("modal");
    divModal.innerHTML = MODAL_TEMPLATE;
    __privateGet(this, _appContainer2).appendChild(divModal);
    __privateSet(this, _modal, divModal);
  }
  addElement(element) {
    const divElement = __privateGet(this, _modal).querySelector(".modal-container");
    divElement.appendChild(element);
  }
  getModalContainer() {
    return __privateGet(this, _modal).querySelector(".modal-container");
  }
  getBackdrop() {
    return __privateGet(this, _modal).querySelector(".modal-backdrop");
  }
  openModal() {
    __privateGet(this, _modal).classList.add("modal--open");
    document.body.style.overflow = "hidden";
  }
  closeModal() {
    __privateGet(this, _modal).classList.remove("modal--open");
    document.body.style.overflow = "";
  }
}
_appContainer2 = new WeakMap();
_modal = new WeakMap();
const DISTANCE = Object.freeze({
  5: "5분 내",
  10: "10분 내",
  15: "15분 내",
  20: "20분 내",
  30: "30분 내"
});
function validateDropDown(title, input) {
  if (isBlank(input)) {
    throw new Error(ERROR_MESSAGES.NOT_SELECTED(title));
  }
}
class InputText {
  constructor({ name, required = false }) {
    __privateAdd(this, _input);
    __privateSet(this, _input, document.createElement("input"));
    __privateGet(this, _input).setAttribute("type", "text");
    __privateGet(this, _input).setAttribute("name", name);
    __privateGet(this, _input).setAttribute("id", name);
    if (required) __privateGet(this, _input).required = true;
  }
  reset() {
    __privateGet(this, _input).value = "";
  }
  getElement() {
    return __privateGet(this, _input);
  }
}
_input = new WeakMap();
class InputTextArea {
  constructor({ name, required = false, cols = 30, rows = 5 }) {
    __privateAdd(this, _textarea);
    __privateSet(this, _textarea, document.createElement("textarea"));
    __privateGet(this, _textarea).setAttribute("name", name);
    __privateGet(this, _textarea).setAttribute("id", name);
    __privateGet(this, _textarea).setAttribute("cols", cols);
    __privateGet(this, _textarea).setAttribute("rows", rows);
    if (required) __privateGet(this, _textarea).required = true;
  }
  reset() {
    __privateGet(this, _textarea).value = "";
  }
  getElement() {
    return __privateGet(this, _textarea);
  }
}
_textarea = new WeakMap();
class AddRestaurantModal extends Modal {
  constructor(appContainer, onClickAddButton) {
    super(appContainer);
    __privateAdd(this, _AddRestaurantModal_instances);
    __privateAdd(this, _cancelButton);
    __privateAdd(this, _addButton);
    __privateAdd(this, _divCategory);
    __privateAdd(this, _divName);
    __privateAdd(this, _divDistance);
    __privateAdd(this, _divDescription);
    __privateAdd(this, _divLink);
    __privateAdd(this, _modalForm);
    __privateAdd(this, _onClickAddButton);
    __privateAdd(this, _bindAddButtonEvent, () => {
      __privateGet(this, _addButton).addEventListener("click", (event) => {
        event.preventDefault();
        if (__privateMethod(this, _AddRestaurantModal_instances, validateInputs_fn).call(this)) {
          __privateMethod(this, _AddRestaurantModal_instances, addNewRestaurant_fn).call(this);
          __privateMethod(this, _AddRestaurantModal_instances, resetForm_fn).call(this);
          this.closeModal();
        }
      });
    });
    __privateAdd(this, _bindCancleButtonEvent, () => {
      __privateGet(this, _cancelButton).addEventListener("click", () => {
        __privateMethod(this, _AddRestaurantModal_instances, resetForm_fn).call(this);
        this.closeModal();
      });
    });
    __privateAdd(this, _bindModalBackDropEvent, () => {
      const backdrop = this.getBackdrop();
      backdrop.addEventListener("click", () => {
        __privateMethod(this, _AddRestaurantModal_instances, resetForm_fn).call(this);
        this.closeModal();
      });
    });
    __privateAdd(this, _bindESCEvent, () => {
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          __privateMethod(this, _AddRestaurantModal_instances, resetForm_fn).call(this);
          this.closeModal();
        }
      });
    });
    __privateAdd(this, _bindEvent5, () => {
      __privateGet(this, _bindAddButtonEvent).call(this);
      __privateGet(this, _bindCancleButtonEvent).call(this);
      __privateGet(this, _bindESCEvent).call(this);
      __privateGet(this, _bindModalBackDropEvent).call(this);
    });
    __privateSet(this, _onClickAddButton, onClickAddButton);
    __privateMethod(this, _AddRestaurantModal_instances, init_fn).call(this);
    __privateGet(this, _bindEvent5).call(this);
    __privateMethod(this, _AddRestaurantModal_instances, createAddModal_fn).call(this);
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
_onClickAddButton = new WeakMap();
_AddRestaurantModal_instances = new WeakSet();
init_fn = function() {
  __privateSet(this, _cancelButton, new Button("button--secondary", "취소하기"));
  __privateSet(this, _addButton, new Button("button--primary", "추가하기"));
  __privateSet(this, _divCategory, new Input({
    name: "category",
    title: "카테고리",
    required: true,
    inputComponent: new InputDropDown({
      name: "category",
      id: "category",
      required: true,
      option: CATEGORY,
      optionDefault: "선택해주세요"
    })
  }));
  __privateSet(this, _divName, new Input({
    name: "name",
    title: "이름",
    required: true,
    inputComponent: new InputText({ name: "name", required: true })
  }));
  __privateSet(this, _divDistance, new Input({
    name: "distance",
    title: "거리(도보 이동 시간)",
    required: true,
    inputComponent: new InputDropDown({
      name: "distance",
      id: "distance",
      required: true,
      option: DISTANCE,
      optionDefault: "선택해주세요"
    })
  }));
  __privateSet(this, _divDescription, new Input({
    name: "description",
    title: "설명",
    spanText: "메뉴 등 추가 정보를 입력해 주세요.",
    inputComponent: new InputTextArea({ name: "description" })
  }));
  __privateSet(this, _divLink, new Input({
    name: "link",
    title: "참조 링크",
    spanText: "매장 정보를 확인할 수 있는 링크를 입력해 주세요.",
    inputComponent: new InputText({ name: "link" })
  }));
  __privateSet(this, _modalForm, document.createElement("form"));
};
resetForm_fn = function() {
  __privateGet(this, _divCategory).reset();
  __privateGet(this, _divName).reset();
  __privateGet(this, _divDistance).reset();
  __privateGet(this, _divDescription).reset();
  __privateGet(this, _divLink).reset();
};
createButton_fn = function() {
  const divButton = document.createElement("div");
  divButton.classList.add("button-container");
  divButton.appendChild(__privateGet(this, _cancelButton));
  divButton.appendChild(__privateGet(this, _addButton));
  return divButton;
};
appendChildToModalForm_fn = function() {
  __privateGet(this, _modalForm).appendChild(__privateGet(this, _divCategory).getElement());
  __privateGet(this, _modalForm).appendChild(__privateGet(this, _divName).getElement());
  __privateGet(this, _modalForm).appendChild(__privateGet(this, _divDistance).getElement());
  __privateGet(this, _modalForm).appendChild(__privateGet(this, _divDescription).getElement());
  __privateGet(this, _modalForm).appendChild(__privateGet(this, _divLink).getElement());
};
createAddModal_fn = function() {
  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal-title");
  modalTitle.classList.add("text-title");
  modalTitle.innerText = "새로운 음식점";
  this.addElement(modalTitle);
  __privateMethod(this, _AddRestaurantModal_instances, appendChildToModalForm_fn).call(this);
  this.addElement(__privateGet(this, _modalForm));
  const divButton = __privateMethod(this, _AddRestaurantModal_instances, createButton_fn).call(this);
  this.addElement(divButton);
};
addNewRestaurant_fn = function() {
  const formData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
  const newRestaurant = new Restaurant({
    name: formData.name,
    distance: Number(formData.distance),
    description: formData.description,
    category: formData.category,
    link: formData.link,
    isLiked: false
  });
  __privateGet(this, _onClickAddButton).call(this, newRestaurant);
};
validateInputs_fn = function() {
  const formData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
  try {
    validateDropDown("카테고리", formData.category);
    validateName(formData.name);
    validateDropDown("거리", formData.distance);
    validateDescription(formData.description);
    validateLink(formData.link);
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
};
_bindAddButtonEvent = new WeakMap();
_bindCancleButtonEvent = new WeakMap();
_bindModalBackDropEvent = new WeakMap();
_bindESCEvent = new WeakMap();
_bindEvent5 = new WeakMap();
class DetailModal extends Modal {
  constructor({ appContainer, onClickDeleteButton }) {
    super(appContainer);
    __privateAdd(this, _DetailModal_instances);
    __privateAdd(this, _cancelButton2);
    __privateAdd(this, _deleteButton);
    __privateAdd(this, _star2);
    __privateAdd(this, _currentRestaurant);
    __privateAdd(this, _onClickDeleteButton);
    __privateAdd(this, _bindDeleteButtonEvent, () => {
      __privateGet(this, _deleteButton).addEventListener("click", (event) => {
        __privateGet(this, _onClickDeleteButton).call(this, __privateGet(this, _currentRestaurant).getName());
        __privateMethod(this, _DetailModal_instances, clearModalContent_fn).call(this);
        this.closeModal();
      });
    });
    __privateAdd(this, _bindCancleButtonEvent2, () => {
      __privateGet(this, _cancelButton2).addEventListener("click", () => {
        __privateMethod(this, _DetailModal_instances, clearModalContent_fn).call(this);
        this.closeModal();
      });
    });
    __privateAdd(this, _bindModalBackDropEvent2, () => {
      const backdrop = this.getBackdrop();
      backdrop.addEventListener("click", () => {
        __privateMethod(this, _DetailModal_instances, clearModalContent_fn).call(this);
        this.closeModal();
      });
    });
    __privateAdd(this, _bindESCEvent2, () => {
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          __privateMethod(this, _DetailModal_instances, clearModalContent_fn).call(this);
          this.closeModal();
        }
      });
    });
    __privateAdd(this, _bindEvent6, () => {
      __privateGet(this, _bindDeleteButtonEvent).call(this);
      __privateGet(this, _bindCancleButtonEvent2).call(this);
      __privateGet(this, _bindESCEvent2).call(this);
      __privateGet(this, _bindModalBackDropEvent2).call(this);
    });
    __privateSet(this, _onClickDeleteButton, onClickDeleteButton);
    __privateMethod(this, _DetailModal_instances, init_fn2).call(this);
    __privateMethod(this, _DetailModal_instances, createAddModal_fn2).call(this);
    __privateGet(this, _bindEvent6).call(this);
    return this;
  }
  setDetailModal(restaurant, restaurantData) {
    this.addRestaurant(restaurant, restaurantData);
    this.openModal();
  }
  addRestaurant(restaurant, restaurantData) {
    __privateSet(this, _currentRestaurant, restaurantData);
    __privateMethod(this, _DetailModal_instances, setRestaurantStyle_fn).call(this, restaurant);
    this.addElement(restaurant);
    this.addElement(__privateMethod(this, _DetailModal_instances, addRestaurantLink_fn).call(this, __privateGet(this, _currentRestaurant).getLink()));
    const divButton = __privateMethod(this, _DetailModal_instances, createButton_fn2).call(this);
    this.addElement(divButton);
  }
}
_cancelButton2 = new WeakMap();
_deleteButton = new WeakMap();
_star2 = new WeakMap();
_currentRestaurant = new WeakMap();
_onClickDeleteButton = new WeakMap();
_DetailModal_instances = new WeakSet();
init_fn2 = function() {
  __privateSet(this, _deleteButton, new Button("button--secondary", "삭제하기"));
  __privateSet(this, _cancelButton2, new Button("button--primary", "닫기"));
};
createAddModal_fn2 = function() {
  this.getModalContainer().classList.add("restaurant-modal");
};
createButton_fn2 = function() {
  const divButton = document.createElement("div");
  divButton.classList.add("button-container");
  divButton.appendChild(__privateGet(this, _deleteButton));
  divButton.appendChild(__privateGet(this, _cancelButton2));
  return divButton;
};
setRestaurantStyle_fn = function(restaurant) {
  restaurant.style.flexDirection = "column";
  __privateSet(this, _star2, restaurant.querySelector(".star-icon"));
  const description = restaurant.querySelector(".restaurant__description");
  if (description) {
    description.style.display = "block";
    description.style.overflow = "visible";
  }
};
addRestaurantLink_fn = function(link) {
  const linkDiv = document.createElement("div");
  linkDiv.innerHTML = link;
  return linkDiv;
};
_bindDeleteButtonEvent = new WeakMap();
_bindCancleButtonEvent2 = new WeakMap();
_bindModalBackDropEvent2 = new WeakMap();
_bindESCEvent2 = new WeakMap();
clearModalContent_fn = function() {
  const modalContent = this.getModalContainer();
  [...modalContent.children].forEach((child) => {
    if (!child.classList.contains("button-container")) {
      child.remove();
    }
  });
};
_bindEvent6 = new WeakMap();
const SORT_BY = Object.freeze({
  name: "이름 순",
  distance: "거리 순"
});
class App {
  constructor() {
    __privateAdd(this, _App_instances);
    __privateAdd(this, _categoryFilter);
    __privateAdd(this, _sortingFilter);
    __privateAdd(this, _currentCategory2);
    __privateAdd(this, _currentSorting2);
    __privateAdd(this, _currentHeader3);
    __privateAdd(this, _restaurantList2);
    __privateAdd(this, _$likeHeader);
    __privateAdd(this, _bindCategoryEvent, () => {
      const categoryElement = __privateGet(this, _categoryFilter).getElement();
      categoryElement.addEventListener("change", (event) => {
        __privateSet(this, _currentCategory2, categoryElement.value);
        __privateMethod(this, _App_instances, handleRestaurantUpdate_fn).call(this);
      });
    });
    __privateAdd(this, _bindSortingEvent, () => {
      const sortingElement = __privateGet(this, _sortingFilter).getElement();
      sortingElement.addEventListener("change", (event) => {
        __privateSet(this, _currentSorting2, sortingElement.value);
        __privateMethod(this, _App_instances, handleRestaurantUpdate_fn).call(this);
      });
    });
    __privateAdd(this, _bindLikeHeaderEvent, () => {
      __privateGet(this, _$likeHeader).getElement().addEventListener("click", () => {
        __privateSet(this, _currentHeader3, __privateGet(this, _$likeHeader).getCurrentHeader());
        __privateMethod(this, _App_instances, handleRestaurantUpdate_fn).call(this);
      });
    });
    __privateAdd(this, _bindEvent7, () => {
      __privateGet(this, _bindCategoryEvent).call(this);
      __privateGet(this, _bindSortingEvent).call(this);
      __privateGet(this, _bindLikeHeaderEvent).call(this);
    });
    __privateAdd(this, _modalClickHandler, () => {
      this.addRestaurantModal.openModal();
    });
    __privateAdd(this, _handleDeleteRestaurant, (restaurantName) => {
      __privateGet(this, _restaurantList2).deleteRestaurant(restaurantName);
    });
    __privateAdd(this, _handleAddRestaurant, (restaurant) => {
      __privateGet(this, _restaurantList2).addRestaurant(restaurant);
    });
    __privateAdd(this, _handleDetailModal, (clonedRestaurant, restaurantData) => {
      this.detailModal.setDetailModal(clonedRestaurant, restaurantData);
    });
    __privateMethod(this, _App_instances, init_fn3).call(this);
  }
}
_categoryFilter = new WeakMap();
_sortingFilter = new WeakMap();
_currentCategory2 = new WeakMap();
_currentSorting2 = new WeakMap();
_currentHeader3 = new WeakMap();
_restaurantList2 = new WeakMap();
_$likeHeader = new WeakMap();
_App_instances = new WeakSet();
init_fn3 = function() {
  __privateMethod(this, _App_instances, createAppContainer_fn).call(this);
  __privateMethod(this, _App_instances, createFilter_fn).call(this);
  __privateMethod(this, _App_instances, initAppUI_fn).call(this);
  __privateGet(this, _bindEvent7).call(this);
};
createAppContainer_fn = function() {
  this.appContainer = document.createElement("div");
  this.appContainer.id = "app";
  this.appContainer.classList.add("app");
  document.body.appendChild(this.appContainer);
  this.filterContainer = document.createElement("section");
  this.filterContainer.classList.add("restaurant-filter-container");
  this.likeHeaderContainer = document.createElement("section");
  this.likeHeaderContainer.classList.add("like-header-container");
  this.restaurantListContainer = document.createElement("section");
  this.restaurantListContainer.classList.add("restaurant-list-container");
  this.restaurantList = document.createElement("ul");
  this.restaurantList.classList.add("restaurant-list");
  this.restaurantList.id = "restaurant-list";
  this.restaurantListContainer.appendChild(this.restaurantList);
  this.appContainer.appendChild(this.likeHeaderContainer);
  this.appContainer.appendChild(this.filterContainer);
  this.appContainer.appendChild(this.restaurantListContainer);
};
createFilter_fn = function() {
  __privateSet(this, _categoryFilter, new InputDropDown({
    name: "category",
    id: "category-filter",
    option: CATEGORY,
    optionDefault: "전체"
  }));
  __privateSet(this, _sortingFilter, new InputDropDown({
    nmae: "sorting",
    id: "sorting-filter",
    option: SORT_BY
  }));
  __privateSet(this, _currentCategory2, "");
  __privateSet(this, _currentSorting2, "name");
  this.filterContainer.appendChild(__privateGet(this, _categoryFilter).getElement());
  this.filterContainer.appendChild(__privateGet(this, _sortingFilter).getElement());
};
_bindCategoryEvent = new WeakMap();
_bindSortingEvent = new WeakMap();
_bindLikeHeaderEvent = new WeakMap();
_bindEvent7 = new WeakMap();
_modalClickHandler = new WeakMap();
handleRestaurantUpdate_fn = function() {
  __privateGet(this, _restaurantList2).sortRestaurantList(__privateGet(this, _currentCategory2), __privateGet(this, _currentSorting2), __privateGet(this, _currentHeader3));
};
_handleDeleteRestaurant = new WeakMap();
_handleAddRestaurant = new WeakMap();
_handleDetailModal = new WeakMap();
initAppUI_fn = function() {
  __privateSet(this, _restaurantList2, new RestaurantList(
    this.restaurantListContainer,
    __privateMethod(this, _App_instances, handleRestaurantUpdate_fn).bind(this),
    __privateGet(this, _handleDetailModal)
  ));
  this.detailModal = new DetailModal({
    appContainer: this.appContainer,
    onClickDeleteButton: __privateGet(this, _handleDeleteRestaurant)
  });
  this.addRestaurantModal = new AddRestaurantModal(this.appContainer, __privateGet(this, _handleAddRestaurant));
  new Header({ appContainer: this.appContainer, onClickIcon: __privateGet(this, _modalClickHandler) });
  __privateSet(this, _$likeHeader, new LikeHeader(this.likeHeaderContainer));
};
new App();
