/* Magic Mirror
 * Module: MMM-MotionView
 *
 * By
 * MIT Licensed.
 */

Module.register("MMM-MotionView", {
    // Default module config
    defaults: {
        width: 640,
        height: 480,
        x: 0,
        y: 0,
        url: "http://localhost:8080/stream",
        refreshInterval: 0
    },

    // Define required styles
    getStyles: function() {
        return ["MMM-MotionView.css"];
    },

    // Override dom generator
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "motion-wrapper";

        // Create container for the image
        var container = document.createElement("div");
        container.className = "motion-image-container";
        container.style.width = this.config.width + "px";
        container.style.height = this.config.height + "px";
        container.style.overflow = "hidden";
        container.style.position = "relative";
        container.style.display = "inline-block";

        // Create the image element
        var img = document.createElement("img");
        img.className = "motion-image";
        img.src = this.config.url;
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.maxWidth = "none";
        img.style.maxHeight = "none";
        
        // Position the image for cropping
        img.style.position = "absolute";
        img.style.left = -this.config.x + "px";
        img.style.top = -this.config.y + "px";
        
        // Append image to container
        container.appendChild(img);
        wrapper.appendChild(container);

        // Add refresh functionality only if refreshInterval is not 0
        if (this.config.refreshInterval > 0) {
            var self = this;
            var refreshImage = function() {
                var timestamp = new Date().getTime();
                img.src = self.config.url + "?t=" + timestamp;
            };

            // Refresh at specified interval
            setInterval(refreshImage, this.config.refreshInterval);
        }

        return wrapper;
    },

    // Start module
    start: function() {
        Log.info("Starting module: " + this.name);
        this.updateDom();
    }
});