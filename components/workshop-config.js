/**
 * Workshop Configuration File
 *
 * Shared metadata for the Columbia-HUJI Responsible Computing Workshop site.
 */

const WORKSHOP_CONFIG = {
    currentYear: 2026,
    currentPhase: 'archive',

    components: {
        schedule: 'components/schedule-reader.html'
    },

    workshops: {
        2025: {
            date: 'February 5th, 2025',
            location: 'Columbia University, Data Science Institute',
            scheduleDataPath: '2025/schedule.csv'
        },
        2026: {
            date: 'February 4th, 2026',
            location: 'Columbia University, Data Science Institute',
            scheduleDataPath: '2026/schedule.csv'
        }
    }
};

async function loadComponent(componentType) {
    try {
        const componentPath = WORKSHOP_CONFIG.components[componentType];
        if (!componentPath) {
            throw new Error(`Unknown component type: ${componentType}`);
        }

        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error(`Error loading component ${componentType}:`, error);
        return '<p>Content currently unavailable. Please try again later.</p>';
    }
}

function getCurrentWorkshopInfo() {
    return WORKSHOP_CONFIG.workshops[WORKSHOP_CONFIG.currentYear];
}
