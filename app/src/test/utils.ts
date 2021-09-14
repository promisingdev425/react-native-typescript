
type Bag = {[key: string]: any};

/**
 * Spy on the methods of a class instance. Spies are
 * added in place and are only added for methods that
 * aren't already spied on.
 */
export function spyOnClassMethods(
  /**
   * The class instance you want to spy on.
   */
  classInstance: Bag,
  /**
   * A list of properties not to spy on.
   */
  blacklist = ['constructor']
) {
  if (classInstance?.constructor?.prototype) {
    Object.getOwnPropertyNames(classInstance.constructor.prototype)
      .filter(m => !blacklist.includes(m))
      .forEach(m => {
        if (
          typeof classInstance[m] === 'function' &&
          jest &&
          !jest.isMockFunction( classInstance[m] )
        ) {
          jest.spyOn(classInstance, m);
        }
      });
  }
}
