/*
 * LifeboxException constructor
 * @message: string
 */

function LifeboxException(message) {
    this.message = message || "Caught in LifeboxException";
    this.name = "LifeboxException";
}