/* Copyright (C) 2023-2025 anonymous

This file is part of PSFree.

PSFree is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

PSFree is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

// Enhanced error handling for PS4 browser compatibility
// Removed popup alerts and integrated with console logging system

function logError(message) {
    // Log to console element if available
    if (typeof logToConsole === 'function') {
        logToConsole(`ERROR: ${message}`);
    }
    
    // Also log to browser console
    console.error(message);
    
    // Update progress with error state
    if (typeof updateProgress === 'function') {
        updateProgress(0, 'Error occurred - check console');
    }
    
    // Show error alert using the new alert system
    if (typeof showAlert === 'function') {
        showAlert('Exploit error occurred', 'error');
    }
}

addEventListener('unhandledrejection', event => {
    const reason = event.reason;
    const errorMsg = `Unhandled rejection: ${reason}\n${reason.sourceURL}:${reason.line}:${reason.column}\n${reason.stack}`;
    logError(errorMsg);
    event.preventDefault(); // Prevent default browser error handling
});

addEventListener('error', event => {
    const reason = event.error;
    const errorMsg = `Unhandled error: ${reason}\n${reason.sourceURL}:${reason.line}:${reason.column}\n${reason.stack}`;
    logError(errorMsg);
    return true; // Prevent default browser error handling
});

// Initialize exploit with progress tracking
function initializeExploit() {
    if (typeof updateProgress === 'function') {
        updateProgress(20, 'Loading PSFree exploit...');
    }
    
    if (typeof logToConsole === 'function') {
        logToConsole('Starting PSFree WebKit exploit');
        logToConsole('Initializing memory corruption primitives...');
    }
    
    if (typeof showAlert === 'function') {
        showAlert('PSFree exploit starting...', 'info');
    }
}

// Wait for DOM to be ready before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExploit);
} else {
    initializeExploit();
}

// we have to dynamically import the program if we want to catch its syntax
// errors
import('./psfree.mjs');
