/**
 * @name _reflect
 * @description 模拟实现`Reflect`API
 * @author ddzy
 * @since 2019/6/20
 */

/**
 * @todo _reflect.get(target, key)
 * @todo _reflect.set(target, key, value)
 * @todo _reflect.has(target, key)
 * @todo _reflect.apply(targetFunc, targetObj, args)
 * @todo _reflect.construct(targetFunc, args)
 * @todo _reflect.deleteProperty(target, key)
 * @todo _reflect.setPrototypeOf(target, newProto)
 * @todo _reflect.getPrototypeOf(target)
 */

/**
 * @see `Reflect`本质为一个单例对象
 * @see 其内部API并无实际关联
 * @see 不具有构造器,不能进行实例化操作
 * @see 更方便的使用函数式,增强可读性
 */


export interface IReflectProps {
  get: (target: TReflectStaticObject, key: TReflectStaticKey) => TReflectStaticValue;
  set: (target: TReflectStaticObject, key: TReflectStaticKey, value: TReflectStaticValue) => boolean;
  has: (target: TReflectStaticObject, key: TReflectStaticKey) => boolean;
  apply: (
    targetFunc: Function,
    targetObj: any,
    args: ArrayLike<any>,
  ) => any;
  construct: (targetFunc: Function, args: ArrayLike<any>) => any;
  deleteProperty: (target: TReflectStaticObject, key: TReflectStaticKey) => boolean;
  getPrototypeOf: (target: any) => any;
  setPrototypeOf: (target: any, newProto: any) => void;
};
export type TReflectStaticKey = string | number;
export type TReflectStaticValue = any;
export type TReflectStaticObject = Record<TReflectStaticKey, TReflectStaticValue>;

export const _reflect: IReflectProps = {
  /**
   * 获取目标对象的指定键值
   * @param target 目标对象
   * @param key 键名
   */
  get(target, key) {
    return target[key];
  },

  /**
   * 设置目标对象的键值
   * @param target 目标对象
   * @param key 键名
   * @param value 键值
   */
  set(target, key, value) {
    let flag = true;

    try {
      target[key] = value;
    } catch (error) {
      flag = false;
    }

    return flag;
  },

  /**
   * 检查目标对象上是否存在对应的键(包括原型上)
   * @param target 目标对象
   * @param key 键名
   */
  has(target, key) {
    return (key in target);
  },

  /**
   * 改变函数执行上下文(与apply相同)
   * @param targetFunc 目标函数
   * @param targetObj 目标对象
   * @param args 传递的参数
   */
  apply(targetFunc, targetObj, args) {
    return targetFunc.apply(targetObj, args);
  },
};