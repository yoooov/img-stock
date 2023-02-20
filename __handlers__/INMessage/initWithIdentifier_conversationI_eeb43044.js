/*
 * Auto-generated by Frida. Please modify to match the signature of -[INMessage initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:dateMessageWasLastRead:numberOfAttachments:messageType:messageEffectType:].
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call -[INMessage initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:dateMessageWasLastRead:numberOfAttachments:messageType:messageEffectType:].
   *
   * @this {object} - Object allowing you to store state for use in onLeave.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Function arguments represented as an array of NativePointer objects.
   * For example use args[0].readUtf8String() if the first argument is a pointer to a C string encoded as UTF-8.
   * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
   * @param {object} state - Object allowing you to keep state across function calls.
   * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
   * However, do not use this to store function arguments across onEnter/onLeave, but instead
   * use "this" which is an object for keeping state local to an invocation.
   */
  onEnter(log, args, state) {
    log(`-[INMessage initWithIdentifier:${args[2]} conversationIdentifier:${args[3]} content:${args[4]} dateSent:${args[5]} sender:${args[6]} recipients:${args[7]} dateMessageWasLastRead:${args[8]} numberOfAttachments:${args[9]} messageType:${args[10]} messageEffectType:${args[11]}]`);
  },

  /**
   * Called synchronously when about to return from -[INMessage initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:dateMessageWasLastRead:numberOfAttachments:messageType:messageEffectType:].
   *
   * See onEnter for details.
   *
   * @this {object} - Object allowing you to access state stored in onEnter.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value represented as a NativePointer object.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave(log, retval, state) {
  }
}
