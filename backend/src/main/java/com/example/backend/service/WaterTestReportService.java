package com.example.backend.service;

import com.example.backend.entity.WaterTestReport;
import com.example.backend.repository.WaterTestReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WaterTestReportService {
    @Autowired
    private WaterTestReportRepository waterTestReportRepository;

    public WaterTestReport createReport(WaterTestReport report) {
        return waterTestReportRepository.save(report);
    }

    public List<WaterTestReport> getAllReports() {
        return waterTestReportRepository.findAll();
    }

    public WaterTestReport getReportById(Long id) {
        return waterTestReportRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Water test report not found with id: " + id));
    }

    public void deleteReport(Long id) {
        waterTestReportRepository.deleteById(id);
    }
}
