export const prefix = "l_por";

/**
 * 存储localStorage
 * @param name
 * @param content
 * @param duration Storage有效时间，单位：小时
 * @param set_time 是否设置时间
 * @returns {boolean}
 */
export const setStore = (
  name: string,
  content: any,
  set_time = false,
  duration = 0
) => {
  if (!name) return false;
  name = prefix + name;
  if (typeof content != "string") {
    content = JSON.stringify(content);
  }
  if (set_time) {
    const date = new Date();
    if (duration > 0) {
      content += `&${date.getTime() + duration * 3600 * 1e3}`;
    } else {
      content += "&0";
    }
    content += `&${date.getTime()}`;
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 * @param name key
 */
export function getStore<T>(name: string): T {
  if (!name) return;
  name = prefix + name;
  const content = window.localStorage.getItem(name);
  if (typeof content == "string" && content != undefined)
  try {
    return JSON.parse(window.localStorage.getItem(name)||null);
  } catch (error) {
    ClearStore(name);
  }

}
/**
 * 清除Store
 * @param name 
 */
export function ClearStore(name:string){
    window.localStorage.removeItem(prefix+name);
}
