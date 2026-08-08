package com.example.backend.repository;

import com.example.backend.entity.WaterTestReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterTestReportRepository extends JpaRepository<WaterTestReport, Long> {
}
