/*
 * ContainerException constructor
 * @message: string
 */

function ContainerException(message) {
    this.message = message || "Caught in ContainerException";
    this.name = "ContainerException";
}