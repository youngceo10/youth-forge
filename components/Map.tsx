'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  chapters: Array<{
    id: number
    city: string
    country: string
    lat: number
    lng: number
    members: number
    status: string
  }>
}

export default function Map({ chapters }: MapProps) {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([20, 0], 2)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: #004e66;
          width: 32px;
          height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0, 78, 102, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background-color: white;
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })

    // Add markers for each chapter
    chapters.forEach((chapter) => {
      const marker = L.marker([chapter.lat, chapter.lng], { icon: customIcon }).addTo(map)

      const statusColor = chapter.status === 'Active' ? '#7BC043' : '#FFDC00'
      
      marker.bindPopup(`
        <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: #004e66;">
            ${chapter.city}
          </h3>
          <p style="margin: 0 0 8px 0; color: #37738d; font-size: 14px;">
            📍 ${chapter.country}
          </p>
          <div style="
            display: inline-block;
            padding: 4px 12px;
            background-color: ${statusColor}20;
            color: ${statusColor === '#7BC043' ? '#4a7c2a' : '#b39600'};
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 8px;
          ">
            ${chapter.status}
          </div>
          <p style="margin: 8px 0 0 0; color: #619bb6; font-size: 13px;">
            👥 ${chapter.members} members
          </p>
        </div>
      `)
    })

    // Cleanup
    return () => {
      map.remove()
    }
  }, [chapters])

  return (
    <div 
      id="map" 
      className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
      style={{ minHeight: '600px' }}
    />
  )
}
